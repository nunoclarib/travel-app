import React from 'react'

export default function EmergencyPopUp() {

    function mostrarPopup() {
        // Criar o popup overlay
        var overlay = document.createElement("div");
        overlay.className = "overlay";

        // Criar o conteúdo do popup
        var popup = document.createElement("div");
        popup.className = "popup";
        
        // Criar o parágrafo com a mensagem
        var mensagem = document.createElement("p");
        mensagem.textContent = "Send message to emergency contact?";

        // Criar os botões
        var btnSim = document.createElement("button");
        btnSim.textContent = "Yes";
        btnSim.addEventListener("click", function() {
            //alert("Botão 'Sim' clicado");
            overlay.remove(); // Remover o overlay ao clicar no botão "Sim"
        });

        var btnNao = document.createElement("button");
        btnNao.textContent = "No";
        btnNao.addEventListener("click", function() {
            //alert("Botão 'Não' clicado");
            overlay.remove(); // Remover o overlay ao clicar no botão "Não"
        });

        // Adicionar parágrafo e botões ao popup
        popup.appendChild(mensagem);
        popup.appendChild(btnSim);
        popup.appendChild(btnNao);

        // Adicionar o popup ao overlay
        overlay.appendChild(popup);

        // Adicionar o overlay à página
        document.body.appendChild(overlay);
    }

  return (
    <div>EmergencyPopUp</div>
  )
}
