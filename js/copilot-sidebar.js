document.addEventListener('DOMContentLoaded', function() {
    // Create the sidebar structure dynamically
    const createSidebar = () => {
        // Create button
        const copilotButton = document.createElement('button');
        copilotButton.className = 'copilot-button';
        copilotButton.setAttribute('aria-label', 'Open Ask AI');
        copilotButton.textContent = 'Ask AI';
        document.body.appendChild(copilotButton);

        // Create sidebar
        const copilotSidebar = document.createElement('div');
        copilotSidebar.className = 'copilot-sidebar';
        copilotSidebar.innerHTML = `
            <div class="copilot-header">
                <div class="copilot-title">Ask AI</div>
                <button class="copilot-close" aria-label="Close Ask AI">&times;</button>
            </div>
            <div class="copilot-content">
                <div class="copilot-conversation">
                    <p class="ai-response">Hey, what can I help you with today?</p>
                </div>
                <div class="copilot-input-container">
                    <input type="text" class="copilot-input" placeholder="Type your query here..." aria-label="Type your query">
                    <button class="copilot-send" aria-label="Send query">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(copilotSidebar);

        // Add event listeners
        copilotButton.addEventListener('click', toggleSidebar);
        document.querySelector('.copilot-close').addEventListener('click', toggleSidebar);
        
        // Send button functionality
        const sendButton = document.querySelector('.copilot-send');
        const inputField = document.querySelector('.copilot-input');
        
        sendButton.addEventListener('click', handleSendQuery);
        inputField.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSendQuery();
            }
        });
    };

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        const sidebar = document.querySelector('.copilot-sidebar');
        const body = document.body;
        
        sidebar.classList.toggle('open');
        body.classList.toggle('sidebar-open');
    };

    // Handle sending a query
    const handleSendQuery = () => {
        const inputField = document.querySelector('.copilot-input');
        const conversation = document.querySelector('.copilot-conversation');
        const query = inputField.value.trim();
        
        if (query) {
            // Add user query to conversation
            const userQuery = document.createElement('p');
            userQuery.className = 'user-query';
            userQuery.textContent = query;
            conversation.appendChild(userQuery);
            
            // Clear input field
            inputField.value = '';
            
            // Simulate response (in a real app, this would be where you call an API)
            setTimeout(() => {
                const response = document.createElement('p');
                response.className = 'ai-response';
                response.textContent = "I'm a simulated response. In a real implementation, this would connect to an API to provide actual assistance.";
                conversation.appendChild(response);
                
                // Scroll to bottom of conversation
                conversation.scrollTop = conversation.scrollHeight;
            }, 1000);
            
            // Scroll to see user's message
            conversation.scrollTop = conversation.scrollHeight;
        }
    };

    // Initialize the sidebar
    createSidebar();
});
