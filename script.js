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
    },
    2: {
        title: "Algorithm Architecture",
        content: `
            <div class="content-body-inner">
                <h2>Phase 02: Algorithm Architecture</h2>
                <p>The FICO score isn't a random number—it's a mathematical formula. Once you understand the weights, you can manipulate the results.</p>
                
                <div class="step-card">
                    <h4>1. The 35% Pillar: Payment History</h4>
                    <p>This is the foundation. One 30-day late payment can drop a high score by 100 points. Consistency is the only way to win here.</p>
                </div>

                <div class="step-card">
                    <h4>2. The 30% Pillar: Amounts Owed (Utilization)</h4>
                    <p>This is the most powerful tool for <b>fast</b> score movement. If your card limit is $1,000 and you owe $900, your score is being throttled. We recommend keeping this under 9% for maximum gains.</p>
                </div>

                <div class="step-card">
                    <h4>3. The "Statement Date" Secret</h4>
                    <p>Banks report your balance to the bureaus on your <b>Statement Date</b>, not your Due Date. If you pay your balance by the due date, the bank still reports a high balance. Pay it 3 days <i>before</i> the statement closes to show 1% utilization.</p>
                </div>

                <div class="step-card">
                    <h4>4. Credit Age (15%)</h4>
                    <p>The algorithm rewards loyalty. Never close your oldest credit card accounts, even if you don't use them. Closing an old account is like deleting years of positive history.</p>
                </div>

                <button class="btn-primary" style="width: 100%; margin-top: 20px;" onclick="closeModule()">MODULE COMPLETE</button>
            </div>
        `
    },
    3: {
        title: "Wealth Habits",
        content: `
            <div class="content-body-inner">
                <h2>Phase 03: Wealth Habits</h2>
                <p>Now that your profile is stabilizing, it's time to stop using credit like a safety net and start using it like a weapon for wealth.</p>
                
                <div class="step-card">
                    <h4>1. The Anti-Debit Lifestyle</h4>
                    <p>Debit cards offer zero credit building and weak fraud protection. Elite clients use credit cards for <b>every</b> daily purchase to earn rewards and build history—then pay them off immediately. Your debit card is only for the ATM.</p>
                </div>

                <div class="step-card">
                    <h4>2. The 2-Card Minimum</h4>
                    <p>A "thin" file is a fragile score. To reach the 800s, you need a mix of accounts. We recommend at least two primary credit cards. This lowers your overall utilization and shows the bureaus you can handle multiple lines of credit responsibly.</p>
                </div>

                <div class="step-card">
                    <h4>3. The Auto-Pay Safety Net</h4>
                    <p>Human error is the #1 score killer. Set every account to "Minimum Payment" via Auto-Pay. You should still pay in full manually, but the Auto-Pay ensures that if life gets busy, your score stays protected.</p>
                </div>

                <div class="step-card">
                    <h4>4. Thinking in Percentages, Not Dollars</h4>
                    <p>Elite credit users don't care about their balance; they care about their percentage. Never let a single card cross 30%, even if you have the cash to pay it off tomorrow. Keeping it low throughout the month is the secret to a stable, high score.</p>
                </div>

                <button class="btn-primary" style="width: 100%; margin-top: 20px;" onclick="closeModule()">MODULE COMPLETE</button>
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