// ==========================================
// THE WEB DEV RPG - GAME LOGIC
// Simple XP and quest system
// ==========================================

// Game State
let gameState = {
    level: 1,
    xp: 0,
    completedQuests: [],
    currentQuest: null
};

// XP System
const XP_PER_QUEST = 50;
const XP_PER_LEVEL = 100;
const TOTAL_QUESTS = 36;

// ==========================================
// INITIALIZATION
// ==========================================
function init() {
    loadProgress();
    renderQuestList();
    updateUI();
    setupEventListeners();
    
    // Show first quest or continue from saved progress
    if (gameState.currentQuest) {
        showQuest(gameState.currentQuest);
    } else {
        showQuest(1);
    }
}

// ==========================================
// LOCAL STORAGE
// ==========================================
function saveProgress() {
    localStorage.setItem('webDevRPG', JSON.stringify(gameState));
}

function loadProgress() {
    const saved = localStorage.getItem('webDevRPG');
    if (saved) {
        gameState = JSON.parse(saved);
    }
}

function resetProgress() {
    if (confirm('Are you sure? This will reset all your progress!')) {
        localStorage.removeItem('webDevRPG');
        gameState = { level: 1, xp: 0, completedQuests: [], currentQuest: null };
        saveProgress();
        renderQuestList();
        updateUI();
        showQuest(1); // Show first quest instead of welcome screen
    }
}

// ==========================================
// UI RENDERING
// ==========================================
function renderQuestList() {
    const questList = document.getElementById('questList');
    questList.innerHTML = '';
    
    for (let questId = 1; questId <= TOTAL_QUESTS; questId++) {
        const questData = questContent[questId];
        const isCompleted = gameState.completedQuests.includes(questId);
        const isActive = gameState.currentQuest === questId;
        
        const questItem = document.createElement('div');
        questItem.className = `quest-item ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`;
        questItem.innerHTML = `
            <div class="quest-item-header">
                <span class="quest-number">#${questId}</span>
                <span class="quest-name">${questData.name}</span>
                <span class="quest-icon">${isCompleted ? '✅' : questData.emoji}</span>
            </div>
        `;
        questItem.addEventListener('click', () => showQuest(questId));
        questList.appendChild(questItem);
    }
}

function updateUI() {
    // Update stats
    document.getElementById('playerLevel').textContent = gameState.level;
    document.getElementById('playerXP').textContent = gameState.xp;
    document.getElementById('xpNeeded').textContent = XP_PER_LEVEL;
    document.getElementById('questsCompleted').textContent = gameState.completedQuests.length;
    
    // Update XP bar
    const xpPercentage = (gameState.xp / XP_PER_LEVEL) * 100;
    document.getElementById('xpBar').style.width = `${xpPercentage}%`;
}

                                    function showQuest(questId) {
    if (!questContent[questId]) return;
    
    const questData = questContent[questId];
    gameState.currentQuest = questId;
    
    // Show quest detail
    document.getElementById('questDetail').classList.remove('hidden');
    
    // Populate quest details
    document.getElementById('questTitle').textContent = `${questData.emoji} ${questData.name}`;
    
    const isCompleted = gameState.completedQuests.includes(questId);
    const statusBadge = document.getElementById('questStatus');
    statusBadge.textContent = isCompleted ? '✅ Completed' : '📝 In Progress';
    statusBadge.className = `quest-status-badge ${isCompleted ? 'completed' : 'active'}`;
    
    // Build quest content HTML
    let contentHTML = `
        <h3>📚 Quest Overview</h3>
        <p>${questData.overview}</p>
    `;
    
    // Only show example code section if it exists
    if (questData.exampleCode) {
        contentHTML += `
        <h3>💻 Example Code</h3>
        <pre><code>${questData.exampleCode}</code></pre>
        `;
    }
    
    document.getElementById('questContent').innerHTML = contentHTML;
    
    // Update complete button
    const completeBtn = document.getElementById('completeQuest');
    completeBtn.disabled = isCompleted;
    completeBtn.textContent = isCompleted ? '✅ Already Completed' : `✅ Complete Quest (+${XP_PER_QUEST} XP)`;
    
    // Update navigation buttons
    document.getElementById('prevQuest').disabled = questId === 1;
    document.getElementById('nextQuest').disabled = questId === TOTAL_QUESTS;
    
    // Re-render quest list to show active state
    renderQuestList();
    
    // Save the current quest
    saveProgress();
}

// ==========================================
// GAME MECHANICS
// ==========================================
function completeQuest() {
    const questId = gameState.currentQuest;
    if (!questId || gameState.completedQuests.includes(questId)) return;
    
    // Add to completed
    gameState.completedQuests.push(questId);
    
    // Add XP
    gameState.xp += XP_PER_QUEST;
    
    // Check for level up
    if (gameState.xp >= XP_PER_LEVEL) {
        levelUp();
    }
    
    // Save and update
    saveProgress();
    updateUI();
    showQuest(questId); // Refresh current quest view
}

function levelUp() {
    gameState.level++;
    gameState.xp -= XP_PER_LEVEL;
    
    // Show level up modal
    const modal = document.getElementById('levelUpModal');
    const newLevel = document.getElementById('newLevel');
    const message = modal.querySelector('.level-up-message');
    
    newLevel.textContent = gameState.level;
    message.textContent = getLevelUpMessage(gameState.level);
    
    modal.classList.remove('hidden');
}

function getLevelUpMessage(level) {
    const messages = [
        "You're becoming a web dev wizard! 🧙‍♂️",
        "Your skills are growing stronger! 💪",
        "Knowledge +10! Keep crushing it! 📚",
        "You're on fire! 🔥",
        "Legendary developer in the making! ⭐",
        "Your code powers are increasing! ⚡",
        "Almost there, keep going! 🚀",
        "Master level achieved! 🏆",
        "You're unstoppable! 💎",
        "Web dev champion! 👑"
    ];
    return messages[Math.min(level - 2, messages.length - 1)] || "Amazing progress! 🎉";
}

// ==========================================
// EVENT LISTENERS
// ==========================================
function setupEventListeners() {
    // Complete quest button
    document.getElementById('completeQuest').addEventListener('click', completeQuest);
    
    // Navigation buttons
    document.getElementById('prevQuest').addEventListener('click', () => {
        if (gameState.currentQuest > 1) {
            showQuest(gameState.currentQuest - 1);
        }
    });
    
    document.getElementById('nextQuest').addEventListener('click', () => {
        if (gameState.currentQuest < TOTAL_QUESTS) {
            showQuest(gameState.currentQuest + 1);
        }
    });
    
    // Reset button
    document.getElementById('resetProgress').addEventListener('click', resetProgress);
    
    // Close level up modal
    document.getElementById('closeLevelUp').addEventListener('click', () => {
        document.getElementById('levelUpModal').classList.add('hidden');
        saveProgress();
        updateUI();
    });
}

// ==========================================
// START GAME
// ==========================================
document.addEventListener('DOMContentLoaded', init);
