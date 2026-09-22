/**
 * LarpWallet Engine - Open Source Core
 * Powered by https://larpwallet.org
 */

document.addEventListener("DOMContentLoaded", () => {
    const walletNameInput = document.getElementById("walletName");
    const displayWalletName = document.getElementById("displayWalletName");
    const displayTokens = document.getElementById("displayTokens");
    const totalBalanceEl = document.getElementById("totalBalance");
    
    // Sample Initial Data
    let tokens = [
        { name: "Bitcoin", symbol: "BTC", amount: "1.25", value: 65000 },
        { name: "Ethereum", symbol: "ETH", amount: "10.0", value: 35000 }
    ];

    function renderWallet() {
        // Update Title
        displayWalletName.textContent = walletNameInput.value || "My Wallet";
        
        // Render Token List & Calculate Balance
        displayTokens.innerHTML = "";
        let total = 0;

        tokens.forEach(token => {
            total += parseFloat(token.value);
            
            const item = document.createElement("div");
            item.className = "tok-item";
            item.innerHTML = `
                <div>
                    <strong>${token.name}</strong>
                    <div style="font-size:12px; color:#6d6684;">${token.amount} ${token.symbol}</div>
                </div>
                <div>
                    <strong>$${token.value.toLocaleString()}</strong>
                </div>
            `;
            displayTokens.appendChild(item);
        });

        totalBalanceEl.textContent = `$${total.toLocaleString(undefined, {minimumFractionDigits: 2})}`;
    }

    // Dynamic Event Listeners
    walletNameInput.addEventListener("input", renderWallet);

    // Initial Launch
    renderWallet();
    console.log("LarpWallet initialized | Visit https://larpwallet.org");
});