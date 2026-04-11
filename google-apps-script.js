/**
 * BEZERRA BORGES ADVOGADOS — Google Apps Script
 *
 * COMO CONFIGURAR:
 * 1. Acesse: https://script.google.com e crie um novo projeto
 * 2. Cole este código e salve (Ctrl+S)
 * 3. Clique em "Implantar" → "Nova implantação"
 *    - Tipo: Aplicativo Web
 *    - Executar como: Minha conta (seu email)
 *    - Quem pode acessar: Qualquer pessoa
 * 4. Copie a URL gerada
 * 5. Cole no Vercel: Settings → Environment Variables → GOOGLE_SCRIPT_URL
 */

const SPREADSHEET_ID = "10NcLK37rIQ-5JaQ8aUfYNd4v8sa2Bw80Xb4f_uoni1Y";
const NOTIFICATION_EMAIL = "contato@bezerraborges.com.br";

function testar() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  handleContact(ss, {
    name: "Teste",
    email: "teste@teste.com",
    phone: "11999999999",
    message: "Teste de integração"
  });
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const type = data.type || "contact";
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    if (type === "contact") {
      handleContact(ss, data);
    } else if (type === "consultoria") {
      handleConsultoria(ss, data);
    }
    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function handleContact(ss, data) {
  let sheet = ss.getSheetByName("Contatos");
  if (!sheet) {
    sheet = ss.insertSheet("Contatos");
    sheet.appendRow(["Data", "Nome", "Email", "Telefone", "Mensagem", "Fonte"]);
    sheet.getRange(1, 1, 1, 6).setFontWeight("bold").setBackground("#1a1a1a").setFontColor("#ffffff");
    sheet.setFrozenRows(1);
  }
  sheet.appendRow([
    new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
    data.name || "",
    data.email || "",
    data.phone || "",
    data.message || "",
    "Site Institucional"
  ]);
  MailApp.sendEmail({
    to: NOTIFICATION_EMAIL,
    subject: "Novo contato: " + data.name,
    body: "Nome: " + data.name + "\nEmail: " + data.email + "\nTelefone: " + data.phone + "\nMensagem: " + data.message
  });
}

function handleConsultoria(ss, data) {
  let sheet = ss.getSheetByName("Consultoria");
  if (!sheet) {
    sheet = ss.insertSheet("Consultoria");
    sheet.appendRow(["Data", "Nome", "Email", "Telefone", "Tipo", "Descrição", "Status", "Obs"]);
    sheet.getRange(1, 1, 1, 8).setFontWeight("bold").setBackground("#1a1a1a").setFontColor("#ffffff");
    sheet.setFrozenRows(1);
  }
  sheet.appendRow([
    new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
    data.name || "",
    data.email || "",
    data.phone || "",
    data.tipo || "",
    data.message || "",
    "Pendente",
    ""
  ]);
  MailApp.sendEmail({
    to: NOTIFICATION_EMAIL,
    subject: "Nova consultoria: " + data.name,
    body: "Nome: " + data.name + "\nEmail: " + data.email + "\nTipo: " + data.tipo + "\nCaso: " + data.message
  });
}
