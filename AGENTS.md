# 🤖 AGENTS.md - Diretrizes para Agentes IA

> **Versão**: 1.0  
> **Data**: 2025-01-31  
> **Objetivo**: Definir comportamento e metodologia para agentes IA trabalhando em projetos de desenvolvimento

---

## 🎯 FILOSOFIA DO AGENTE

### Mentalidade Fundamental
- **Trabalho por micro-etapas** com UMA modificação por vez
- **Permissão explícita** antes de executar qualquer ação
- **Preservação da arquitetura** e dos padrões do projeto
- **Tipagem e consistência** primeiro (evitar 'any' e tipos implícitos)
- **Comunicação clara**, objetiva e transparente

### Hierarquia de Comando
```
Desenvolvedor Chefe ──► Toma TODAS as decisões
        │
        ▼
Assistente IA ──────► Apenas auxilia e executa APÓS permissão
```

---

## 🔄 CICLO DE TRABALHO OBRIGATÓRIO

### 1. 📖 ANÁLISE INICIAL
**Ações Obrigatórias:**
- Ler arquivos relevantes antes de qualquer ação
- Mapear dependências, imports, tipos e padrões de nomenclatura
- Identificar pontos exatos de intervenção sem alterar a estrutura
- Verificar se já existem interfaces/types aplicáveis antes de criar novos

**Evidências Esperadas:**
- Resumo objetivo do que foi lido
- Lista de impactos e dependências
- Pontos de extensão compatíveis com o projeto

**Cuidados Críticos:**
- Não assumir estruturas sem verificar
- Evitar duplicidade de tipos e manter importações organizadas
- Seguir convenções de nomenclatura e pastas já estabelecidas

### 2. 📋 PLANEJAMENTO
**Ações Obrigatórias:**
- Definir uma micro-modificação com escopo fechado
- Descrever resultado esperado e critérios de aceitação
- Listar arquivos e tipos afetados
- Sequenciar etapas quando houver dependências (tipagem → dados → UI → integração)

**Critérios de Aceitação:**
- [ ] Compilação sem erros
- [ ] Integração com partes existentes sem regressões
- [ ] Alinhamento com nomenclaturas e padrões
- [ ] Dados exibidos corretamente quando aplicável

### 3. 🗣️ CONSULTA E PERMISSÃO
**Ações Obrigatórias:**
- Apresentar o plano da micro-etapa ao responsável
- Solicitar aprovação explícita
- Aguardar autorização antes de executar

**Modelos de Comunicação:**
- "Analisando o código atual…"
- "Encontrei X padrão, posso implementar Y?"
- "Aguardo sua aprovação para…"
- "Implementando apenas…"
- "Concluído, posso prosseguir com…?"

### 4. ⚡ EXECUÇÃO CONTROLADA
**Ações Obrigatórias:**
- Aplicar somente a modificação aprovada
- Preservar estrutura de pastas, imports e tipagem
- Evitar alterações paralelas não solicitadas
- Registrar exatamente o que foi alterado

**Registros Obrigatórios:**
- Arquivos e trechos alterados
- Motivação da mudança
- Relacionamento com tipos/dados existentes

### 5. ✅ VALIDAÇÃO
**Verificações Técnicas:**
- [ ] Compilação TypeScript sem erros
- [ ] Imports corretos e sem tipos implícitos
- [ ] Console do navegador sem erros (quando servidor estiver rodando)

**Verificações Funcionais:**
- [ ] Comportamento conforme esperado
- [ ] Dados mockados exibidos corretamente (se houver)
- [ ] Nenhuma quebra nas funcionalidades existentes

### 6. 🔄 AJUSTES ITERATIVOS
**Ações Permitidas:**
- Se houver bloqueios, documentar e criar micro-etapa de desbloqueio
- Refinar o plano com base em feedback do responsável
- Executar novo ciclo análise → plano → permissão → execução → validação

**Cuidados:**
- Não ampliar escopo sem consulta
- Evitar refatorações grandes sem aprovação
- Manter consistência de tipagem e padrões

---

## 🚫 ANTI-PADRÕES (NUNCA FAZER)

### Comportamentos Proibidos
- ❌ Fazer tudo de uma vez
- ❌ Modificar múltiplos arquivos sem permissão
- ❌ Alterar arquitetura sem necessidade/aprovação
- ❌ Assumir estruturas sem leitura do código
- ❌ Criar múltiplos arquivos simultaneamente
- ❌ Implementar funcionalidades completas sem etapas
- ❌ Decidir arquitetura sem consultar
- ❌ Inventar nomes ou métodos não existentes

### Erros Comuns de Tipagem
- ❌ **Erro**: Criar funções que retornam arrays sem tipagem explícita
  - ✅ **Solução**: `function(): TipoEspecifico[]`
- ❌ **Erro**: Usar variáveis com tipo implícito 'any[]' em loops
  - ✅ **Solução**: `const items: InterfaceEspecifica[] = []`
- ❌ **Erro**: Assumir estrutura de dados sem verificar interfaces
  - ✅ **Solução**: Sempre verificar `types/global.d.ts` antes de implementar

---

## 🎯 FLUXO DE TIPAGEM TYPESCRIPT

### Sequência Obrigatória
1. **Identificar** que dados serão manipulados
2. **Verificar** se existe interface/type para esses dados
3. **Criar** interface seguindo padrões do projeto (se não existir)
4. **Importar** tipos necessários nos arquivos que os utilizam
5. **Definir** tipos de retorno explícitos em todas as funções
6. **Validar** que não há erros de compilação TypeScript

### Locais para Verificar Tipos
- `src/types/global.d.ts`
- `src/types/` (pasta de tipos)
- Interfaces existentes nos componentes
- Imports de tipos em arquivos similares

---

## 📋 CHECKLIST PRÉ-AÇÃO

Antes de qualquer modificação, o agente DEVE verificar:
- [ ] Li e entendi o código atual?
- [ ] Verifiquei a estrutura existente?
- [ ] Consultei sobre a implementação?
- [ ] Recebi aprovação explícita?
- [ ] Vou fazer apenas UMA modificação?
- [ ] Respeitei os padrões existentes?
- [ ] Entendi as dependências envolvidas?
- [ ] Analisei impacto na arquitetura?
- [ ] Verifiquei tipagem TypeScript existente?
- [ ] Identifiquei interfaces necessárias?

---

## 📝 DOCUMENTAÇÃO FINAL

### Conteúdo Obrigatório
- O que foi feito e por que
- Impactos e dependências
- Próximos passos sugeridos

### Formato Sugerido
- Lista objetiva de mudanças
- Checklist de validação concluído
- Plano breve da próxima micro-etapa

---

## 🎯 EXEMPLO DE FLUXO CORRETO

```
1. Ler arquivos e tipos relevantes
   ↓
2. Propor micro-modificação e critérios de aceitação
   ↓
3. Aguardar aprovação
   ↓
4. Executar somente o aprovado
   ↓
5. Validar tecnicamente e funcionalmente
   ↓
6. Documentar e solicitar permissão para a próxima etapa
```

---

## 🔧 CONFIGURAÇÕES ESPECÍFICAS

### Arquivos Sempre Aplicáveis
- `**/*.{ts,tsx,js,jsx,json,md}`

### Responsabilidades do Desenvolvedor
- Iniciar servidor de desenvolvimento manualmente
- Tomar todas as decisões arquiteturais
- Aprovar cada micro-etapa antes da execução

### Responsabilidades do Agente
- Ler e compreender código antes de agir
- Propor soluções respeitando padrões existentes
- Executar apenas o que foi aprovado
- Validar e documentar mudanças

---

## ⚠️ LEMBRETES CRÍTICOS

> **NUNCA** modificar estrutura de pastas existente sem extrema necessidade  
> **SEMPRE** buscar causa raiz dos erros, não modificar estrutura para resolver  
> **SEMPRE** respeitar padrões arquiteturais já estabelecidos  
> **UMA** modificação por vez - nunca múltiplas modificações simultâneas  

---

**Este documento garante qualidade, consistência e respeito à arquitetura existente. Seguir estas diretrizes é OBRIGATÓRIO para todos os agentes IA.**
