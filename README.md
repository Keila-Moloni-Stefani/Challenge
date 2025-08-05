# Challenge - Amigo Secreto🎁

O Amigo Secreto é uma aplicação web interativa desenvolvida em JavaScript que permite aos usuários adicionar nomes de amigos em uma lista e realizar sorteios aleatórios para determinar quem é o "amigo secreto".
Esta aplicação foi criada para facilitar um sorteio justo e aleatório. A interface é intuitiva e responsiva, proporcionando uma experiência fluida para o usuário, de forma simples e divertida.

*O projeto foi desenvolvido como parte da Formação ONE (Oracle Next Education) em parceria com a Alura.*

## Funcionalidades
- ✅ **Adicionar Amigos:** Interface simples com campo de texto e botão para inclusão de nomes
- ✅ **Lista Dinâmica:** Visualização em tempo real dos nomes adicionados
- ✅ **Sorteio Aleatório:** Seleção de um participante da lista
- ✅ **Validações Inteligentes:** Verificação de campos vazios e nomes duplicados, o programa exibirá um alerta em ambas situações

### Melhorias de UX
- ✅ **Foco Automático:** Cursor posicionado automaticamente no campo de entrada
- ✅ **Tecla Enter:** Permite adicionar nomes na lista pressionando Enter
- ✅ **Limpeza Automática:** Campo é limpo após cada adição
- ✅ **Design Responsivo:** Interface adaptável para diferentes dispositivos

# Como Utilizar a Aplicação
## Passo a Passo:
### Adicionar Participantes
- Digite o nome do amigo no campo de texto
- Clique em "Adicionar" ou pressione Enter
- O nome aparecerá na lista abaixo
- Repita para todos os participantes

### Realizar o Sorteio
- Certifique-se de ter pelo menos um participante
- Clique no botão "Sortear amigo"
- O nome sorteado aparecerá destacado na tela

### Novo Sorteio
- Para um novo sorteio, acrescente nomes e sorteie, ou, atualize a página para limpar a lista e repita os passos anteriores

# Demonstração
https://github.com/user-attachments/assets/f925b92a-2ec2-4de7-b640-24707cc6c64a


# Tecnologias utilizadas
- <img align="center" alt="html5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
- <img align="center" alt="css" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
- <img align="center" alt="javascript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logocolor=black">

# Como Executar o Projeto
## Pré-requisitos ##
- **Git**
- **VS Code**

## Método 1: Execução Direta
```bash
git clone https://github.com/Keila-Moloni-Stefani/Challenge.git 
cd Challenge
```
- Abra o index.html no navegador (duplo clique ou arraste para o navegador)

## Método 2: Servidor Local
```bash
Usando Live Server no VS Code
code .
Clique com botão direito em index.html → "Open with Live Server"
```

## Método 3: GitHub Pages
```markdown
Acesse diretamente: https://keila-moloni-stefani.github.io/Challenge/ 
```

# Problemas Comuns e Soluções
<details>
<summary><strong>Lista de nomes não aparece</strong></summary>

- Verifique se o arquivo app.js está carregando
- Abra o Console (F12) e verifique erros JavaScript
- Certifique-se que os IDs no HTML correspondem aos do JavaScript

</details>
<details>
<summary><strong>Botões não funcionam</strong></summary>

- Verifique se as funções adicionarAmigo() e sortearAmigo() estão definidas
- Confirme que o JavaScript carrega após o HTML (use defer)

</details>
<details>
<summary><strong>Estilos não carregam</strong></summary>

- Verifique se style.css está no diretório correto
- Caso use fontes do Google Fonts, confirme a conexão com a internet
- Teste em modo privado/incógnito do navegador

</details>
<details>
<summary><strong>Não funciona em dispositivos móveis</strong></summary>

- Use um servidor local (não abra diretamente o arquivo HTML)
- Verifique se o navegador móvel suporta ES6+
</details>

# Debug
## Para debugar problemas:
- Abra o Console do navegador (F12)
- Verifique a aba "Console" para erros JavaScript
- Use a aba "Network" para verificar carregamento de arquivos
- Teste as funções individualmente no console

# Melhorias futuras
- Remover amigos individualmente da lista
- Limpar a lista quando clicar em “sortear amigo”
- Limpar a lista de nomes após o sorteio
- Permitir múltiplos sorteios com histórico
- Adicionar animações para melhor UX
-  Salvar listas localmente


# Desenvolvedor
Desenvolvido por Keila Moloni Stefani
________________________________________
⭐ Se este projeto foi útil para você, considere dar uma estrela!


