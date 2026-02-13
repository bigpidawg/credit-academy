const modules = {
    1: {
        title: "The Partnership",
        content: `
            <div class="content-body-inner">
                <h2>Phase 01: The Partnership</h2>
                <p>Welcome to the Elite Circle. We are now officially handling your credit restoration. To ensure the fastest results, you must understand your role in this mission.</p>
                
                <div class="step-card">
                    <h4>1. The Agency Engine</h4>
                    <p>While we are disputing inaccuracies and challenging the bureaus, your job is to keep your profile "clean." Think of us as the mechanics and you as the driver. We fix the engine; you stay in your lane.</p>
                </div>

                <div class="step-card">
                    <h4>2. The Golden Rule</h4>
                    <p>DO NOT apply for new credit (cars, loans, cards) during this process. Every hard inquiry can stall our momentum. If you must apply for something, consult your dedicated agent first.</p>
                </div>

                <div class="step-card">
                    <h4>3. The Bureau Letters</h4>
                    <p>The bureaus will mail responses directly to you. **Do not open them.** Simply take a clear photo of the envelope and the contents, and upload them to your client portal immediately. This is how we track our wins.</p>
                </div>

                <div class="step-card">
                    <h4>4. Stay Current</h4>
                    <p>A single late payment while we are working can set your progress back by 6 months. Set everything to Auto-Pay today.</p>
                </div>

                <button class="btn-primary" style="width: 100%; margin-top: 20px;" onclick="closeModule()">I UNDERSTAND - COMPLETE PHASE 1</button>
            </div>
        `
    }
};

function loadModule(id) {
    const content = modules[id];
    if (content) {
        document.getElementById('content-body').innerHTML = content.content;
        document.getElementById('module-content').classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scroll
    }
}

function closeModule() {
    document.getElementById('module-content').classList.add('hidden');
    document.body.style.overflow = 'auto';
}