const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');

terminalInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        const command = terminalInput.value;
        terminalInput.value = '';
        processCommand(command);
    }
});

function processCommand(command) {
    // Here you can define the actions for different commands
    // For demonstration purposes, let's just echo the command
    terminalOutput.innerHTML += `$ ${command}\n`;
}