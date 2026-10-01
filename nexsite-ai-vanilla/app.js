import { generateWebsite } from './ai.js';

let currentConfig = {
    themeType: 'dark',
    fontFamily: 'Inter',
    sections: [
        {
            type: 'hero',
            props: { title: 'Welcome to NexSite AI', subtitle: 'Start by describing your website.' }
        }
    ]
};

const apiKeyInput = document.getElementById('api-key-input');
const promptInput = document.getElementById('prompt-input');
const generateBtn = document.getElementById('generate-btn');
const chatHistory = document.getElementById('chat-history');
const previewArea = document.getElementById('website-preview');
const dynamicContent = document.getElementById('dynamic-content');

// Render Engine
function renderSections(config) {
    // Apply Global Theme
    previewArea.setAttribute('data-theme', config.themeType || 'dark');
    
    // Apply Font
    if (config.fontFamily) {
        document.body.style.fontFamily = `"${config.fontFamily}", sans-serif`;
    }

    dynamicContent.innerHTML = ''; // Clear current

    if (!config.sections) return;

    config.sections.forEach(section => {
        let html = '';
        if (section.type === 'hero') {
            html = `
                <div class="section hero-section">
                    <h1>${section.props.title}</h1>
                    <p>${section.props.subtitle}</p>
                </div>
            `;
        } else if (section.type === 'pricing') {
            const plansHtml = section.props.plans.map(plan => `
                <div class="pricing-card">
                    <h3>${plan.name}</h3>
                    <h2>${plan.price}</h2>
                    <ul>${plan.features.map(f => `<li>${f}</li>`).join('')}</ul>
                    <button style="margin-top:20px; padding:10px; width:100%;">${plan.cta}</button>
                </div>
            `).join('');
            html = `
                <div class="section">
                    <h2 style="text-align:center">${section.props.title}</h2>
                    <div class="pricing-grid">${plansHtml}</div>
                </div>
            `;
        } else if (section.type === 'faq') {
            const faqHtml = section.props.questions.map(q => `
                <div class="faq-item">
                    <h4>${q.question}</h4>
                    <p>${q.answer}</p>
                </div>
            `).join('');
            html = `
                <div class="section">
                    <h2 style="text-align:center; margin-bottom: 20px;">${section.props.title}</h2>
                    <div class="faq-list">${faqHtml}</div>
                </div>
            `;
        }
        dynamicContent.innerHTML += html;
    });
}

function addChatMessage(sender, text) {
    const div = document.createElement('div');
    div.className = `message ${sender}`;
    div.innerText = text;
    chatHistory.appendChild(div);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

generateBtn.addEventListener('click', async () => {
    const apiKey = apiKeyInput.value.trim();
    const prompt = promptInput.value.trim();

    if (!apiKey) return alert("Please enter API Key");
    if (!prompt) return;

    addChatMessage('user', prompt);
    promptInput.value = '';
    
    const loadingMsg = document.createElement('div');
    loadingMsg.className = 'message system';
    loadingMsg.innerText = 'Generating layout...';
    chatHistory.appendChild(loadingMsg);

    try {
        const newConfig = await generateWebsite(apiKey, prompt, currentConfig);
        currentConfig = newConfig; // Update UI state
        renderSections(currentConfig);
        loadingMsg.innerText = 'Layout updated successfully!';
    } catch (error) {
        loadingMsg.innerText = 'Error: ' + error.message;
    }
});

// Initial Render
renderSections(currentConfig);
