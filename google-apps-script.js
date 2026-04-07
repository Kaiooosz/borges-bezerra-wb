/**
 * BEZERRA BORGES ADVOGADOS — Google Apps Script
 *
 * COMO CONFIGURAR:
 * 1. Abra a planilha: https://docs.google.com/spreadsheets/d/10NcLK37rIQ-5JaQ8aUfYNd4v8sa2Bw80Xb4f_uoni1Y
 * 2. Menu: Extensões → Apps Script
 * 3. Cole este código e salve (Ctrl+S)
 * 4. Clique em "Implantar" → "Nova implantação"
 *    - Tipo: Aplicativo Web
 *    - Executar como: Minha conta (seu email)
 *    - Quem pode acessar: Qualquer pessoa
 * 5. Copie a URL gerada
 * 6. Cole no arquivo .env.local: GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/SEU_ID/exec
 * 7. Adicione também no Vercel: Settings → Environment Variables
 */

const NOTIFICATION_EMAIL = "contato@bezerraborges.com.br";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const type = data.type || "contact";

    const ss = SpreadsheetApp.getActiveSpreadsheet();

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

// ─── Contato geral (formulário do site) ───────────────────────────────────────

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
    "Site Institucional",
  ]);

  MailApp.sendEmail({
    to: NOTIFICATION_EMAIL,
    subject: `📩 Novo contato: ${data.name}`,
    htmlBody: `
      <div style="font-family: sans-serif; max-width: 500px;">
        <h2 style="color: #111; border-bottom: 1px solid #eee; padding-bottom: 8px;">Novo Contato — Site Bezerra Borges</h2>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr><td style="padding: 6px 0; color: #666; width: 100px;">Nome</td><td style="padding: 6px 0;"><strong>${data.name}</strong></td></tr>
          <tr><td style="padding: 6px 0; color: #666;">Email</td><td style="padding: 6px 0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
          <tr><td style="padding: 6px 0; color: #666;">Telefone</td><td style="padding: 6px 0;"><a href="https://wa.me/${(data.phone || "").replace(/\D/g, "")}">${data.phone}</a></td></tr>
          <tr><td style="padding: 6px 0; color: #666; vertical-align: top;">Mensagem</td><td style="padding: 6px 0;">${(data.message || "").replace(/\n/g, "<br>")}</td></tr>
        </table>
      </div>
    `,
  });
}

// ─── Consultoria (formulário dedicado) ────────────────────────────────────────

function handleConsultoria(ss, data) {
  let sheet = ss.getSheetByName("Consultoria");
  if (!sheet) {
    sheet = ss.insertSheet("Consultoria");
    sheet.appendRow([
      "Data", "Nome", "Email", "Telefone",
      "Tipo de Consultoria", "Descrição do Caso",
      "Status Pagamento", "Observações",
    ]);
    const header = sheet.getRange(1, 1, 1, 8);
    header.setFontWeight("bold").setBackground("#1a1a1a").setFontColor("#ffffff");
    sheet.setFrozenRows(1);

    // Formatar coluna "Status Pagamento" com validação
    const rule = SpreadsheetApp.newDataValidation()
      .requireValueInList(["Pendente", "Pago", "Cancelado"], true)
      .build();
    sheet.getRange("G2:G1000").setDataValidation(rule);

    // Formatação condicional: Pago = verde, Pendente = amarelo, Cancelado = vermelho
    const rules = sheet.getConditionalFormatRules();
    rules.push(
      SpreadsheetApp.newConditionalFormatRule()
        .whenTextEqualTo("Pago")
        .setBackground("#c6efce").setFontColor("#276221")
        .setRanges([sheet.getRange("G2:G1000")])
        .build()
    );
    rules.push(
      SpreadsheetApp.newConditionalFormatRule()
        .whenTextEqualTo("Pendente")
        .setBackground("#ffeb9c").setFontColor("#9c6500")
        .setRanges([sheet.getRange("G2:G1000")])
        .build()
    );
    rules.push(
      SpreadsheetApp.newConditionalFormatRule()
        .whenTextEqualTo("Cancelado")
        .setBackground("#ffc7ce").setFontColor("#9c0006")
        .setRanges([sheet.getRange("G2:G1000")])
        .build()
    );
    sheet.setConditionalFormatRules(rules);
  }

  sheet.appendRow([
    new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
    data.name || "",
    data.email || "",
    data.phone || "",
    data.tipo || "",
    data.message || "",
    "Pendente",
    "",
  ]);

  MailApp.sendEmail({
    to: NOTIFICATION_EMAIL,
    subject: `⚖️ Nova consultoria: ${data.name} — ${data.tipo}`,
    htmlBody: `
      <div style="font-family: sans-serif; max-width: 500px;">
        <h2 style="color: #111; border-bottom: 1px solid #eee; padding-bottom: 8px;">Nova Solicitação de Consultoria</h2>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr><td style="padding: 6px 0; color: #666; width: 150px;">Nome</td><td style="padding: 6px 0;"><strong>${data.name}</strong></td></tr>
          <tr><td style="padding: 6px 0; color: #666;">Email</td><td style="padding: 6px 0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
          <tr><td style="padding: 6px 0; color: #666;">Telefone</td><td style="padding: 6px 0;"><a href="https://wa.me/${(data.phone || "").replace(/\D/g, "")}">${data.phone}</a></td></tr>
          <tr><td style="padding: 6px 0; color: #666;">Tipo</td><td style="padding: 6px 0;">${data.tipo}</td></tr>
          <tr><td style="padding: 6px 0; color: #666; vertical-align: top;">Caso</td><td style="padding: 6px 0;">${(data.message || "").replace(/\n/g, "<br>")}</td></tr>
          <tr><td style="padding: 6px 0; color: #666;">Status</td><td style="padding: 6px 0;"><span style="background:#ffeb9c;color:#9c6500;padding:2px 8px;border-radius:4px;font-size:12px;">Pendente</span></td></tr>
        </table>
        <p style="margin-top: 16px; font-size: 12px; color: #999;">
          Acesse a planilha para atualizar o status de pagamento e agendar a sessão.
        </p>
      </div>
    `,
  });
}
