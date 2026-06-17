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
    } else if (type === "qualificacao") {
      handleQualificacao(ss, data);
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

// Mapeia o objetivo informado para uma tag de origem do CRM.
function mapOrigem(objetivo) {
  var map = {
    "Internacionalização empresarial": "internacionalizacao",
    "Holding e sucessão": "holding",
    "Paraguai": "paraguai",
    "Cripto e fintech": "cripto-fintech",
    "Proteção patrimonial": "patrimonio"
  };
  return map[objetivo] || "geral";
}

// Calcula a temperatura do lead (uso interno do CRM — nunca exibida ao lead).
function scoreLead(data) {
  var score = 0;
  if (data.faturamento === "R$ 200 mil – 1 mi/mês" || data.faturamento === "Acima de R$ 1 mi/mês") score += 2;
  else if (data.faturamento === "R$ 50 mil – 200 mil/mês") score += 1;

  if (data.patrimonio === "Acima de R$ 10 mi" || data.patrimonio === "R$ 2 mi – 10 mi") score += 2;
  else if (data.patrimonio === "R$ 500 mil – 2 mi") score += 1;

  if (data.margem === "Acima de 40%") score += 2;
  else if (data.margem === "20% – 40%") score += 1;

  if (data.estruturaExterior && data.estruturaExterior !== "Ainda não tenho") score += 1;
  if (data.receitaInternacional === "Recebo de forma recorrente") score += 1;

  if (data.urgencia === "Imediata") score += 2;
  else if (data.urgencia === "Nos próximos 1–3 meses") score += 1;
  else if (data.urgencia === "Apenas pesquisando") score -= 1;

  if (score >= 5) return "quente";
  if (score >= 2) return "morno";
  return "frio";
}

function handleQualificacao(ss, data) {
  var sheet = ss.getSheetByName("Qualificacao");
  if (!sheet) {
    sheet = ss.insertSheet("Qualificacao");
    sheet.appendRow([
      "Data", "Nome", "Email", "Telefone", "Objetivo", "Origem",
      "Faturamento", "Margem", "Patrimônio", "Estrutura Exterior", "Receita Internacional",
      "Urgência", "Contexto", "Temperatura", "Status", "Obs"
    ]);
    sheet.getRange(1, 1, 1, 16).setFontWeight("bold").setBackground("#1a1a1a").setFontColor("#ffffff");
    sheet.setFrozenRows(1);
  }
  var origem = mapOrigem(data.objetivo);
  var temperatura = scoreLead(data);
  sheet.appendRow([
    new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
    data.name || "",
    data.email || "",
    data.phone || "",
    data.objetivo || "",
    origem,
    data.faturamento || "",
    data.margem || "",
    data.patrimonio || "",
    data.estruturaExterior || "",
    data.receitaInternacional || "",
    data.urgencia || "",
    data.message || "",
    temperatura,
    "Pendente",
    ""
  ]);
  MailApp.sendEmail({
    to: NOTIFICATION_EMAIL,
    subject: "Novo diagnóstico [" + temperatura.toUpperCase() + " / " + origem + "]: " + data.name,
    body:
      "Nome: " + data.name +
      "\nEmail: " + data.email +
      "\nTelefone: " + data.phone +
      "\nObjetivo: " + data.objetivo + " (origem: " + origem + ")" +
      "\nFaturamento: " + data.faturamento +
      "\nMargem: " + data.margem +
      "\nPatrimônio: " + data.patrimonio +
      "\nEstrutura no exterior: " + data.estruturaExterior +
      "\nReceita internacional: " + data.receitaInternacional +
      "\nUrgência: " + data.urgencia +
      "\nTemperatura (interno): " + temperatura +
      "\nContexto: " + (data.message || "—")
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
