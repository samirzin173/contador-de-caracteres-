document.addEventListener("DOMContentLoaded", function() {
    const textInput = document.getElementById("textInput");
    const countDisplay = document.getElementById("count");
    const resetButton = document.getElementById("resetButton");

    // Atualiza a contagem de caracteres
    function updateCharacterCount() {
        const textLength = textInput.value.length;
        countDisplay.textContent = textLength;
    }

    // Adiciona evento de entrada para contar caracteres enquanto o usuário digita
    textInput.addEventListener("input", updateCharacterCount);

    // Adiciona evento para o botão de reset
    resetButton.addEventListener("click", function() {
        textInput.value = ''; // Limpa o textarea
        countDisplay.textContent = '0'; // Reseta a contagem
        textInput.focus(); // Coloca o foco de volta no textarea
    });
});
