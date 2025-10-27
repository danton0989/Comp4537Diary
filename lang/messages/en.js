// Content for all quests
const questContent = {
    1: {
        name: "JS Hoisting",
        emoji: "🎈",
        overview: "Hoisting moves declarations to the top of their scope before execution.",
        exampleCode: `console.log(a); // undefined
var a = 5;
sayHi(); // Works
function sayHi() { console.log("Hi!"); }`
    },
    2: {
        name: "Closure",
        emoji: "🔒",
        overview: "A closure lets a function remember variables from its outer scope.",
        exampleCode: `function counter() {
  let count = 0;
  return () => ++count;
}
const add = counter();
add(); // 1`
    },
    3: {
        name: "Asynchronous programming",
        emoji: "⏰",
        overview: "Async code runs without blocking other operations.",
        exampleCode: `async function getData() {
  const res = await fetch('/api');
  return await res.json();
}`
    },
    4: {
        name: "Memory leak",
        emoji: "💧",
        overview: "Memory leaks happen when unused memory isn't released."
    },
    5: {
        name: "Classes in JS",
        emoji: "🏛️",
        overview: "Classes define blueprints for creating objects with shared logic."
    },
    6: {
        name: "Web application architectural patterns",
        emoji: "🧱",
        overview: "Design structures that define how web systems are organized and interact."
    },
    7: {
        name: "Monolithic Architecture",
        emoji: "🧩",
        overview: "A single, unified codebase where all components are tightly connected."
    },
    8: {
        name: "Layered (n-Tier) Architecture",
        emoji: "📚",
        overview: "Separates logic into layers like presentation, business, and data."
    },
    9: {
        name: "Microservices Architecture",
        emoji: "🔬",
        overview: "Applications split into small, independent services communicating over APIs."
    },
    10: {
        name: "Event-Driven Architecture",
        emoji: "⚡",
        overview: "Components react to emitted events instead of direct calls."
    },
    11: {
        name: "Serverless / Function-as-a-Service (FaaS)",
        emoji: "☁️",
        overview: "Code runs on demand without managing servers manually."
    },
    12: {
        name: "Model-View-Controller (MVC)",
        emoji: "🏗️",
        overview: "Separates data (Model), UI (View), and logic (Controller)."
    },
    13: {
        name: "Model-View-ViewModel (MVVM)",
        emoji: "🪞",
        overview: "Like MVC but uses a ViewModel to manage UI bindings."
    },
    14: {
        name: "Micro-Frontends",
        emoji: "🧩",
        overview: "Frontend apps split into smaller, independent modules."
    },
    15: {
        name: "Command Query Responsibility Segregation (CQRS)",
        emoji: "🔀",
        overview: "Separates read and write operations into different models."
    },
    16: {
        name: "Promises, await, and async",
        emoji: "🤝",
        overview: "Tools for handling asynchronous operations cleanly in JavaScript."
    },
    17: {
        name: "Fetch",
        emoji: "🌐",
        overview: "The Fetch API makes HTTP requests and handles responses."
    },
    18: {
        name: "Defer",
        emoji: "⏳",
        overview: "The defer attribute delays script execution until the HTML is parsed."
    },
    19: {
        name: "Execution stack",
        emoji: "📜",
        overview: "The call stack tracks which function is currently being executed."
    },
    20: {
        name: "Public-key/private-key",
        emoji: "🔑",
        overview: "A pair of keys used for secure encryption and digital signatures."
    },
    21: {
        name: "Content delivery network (CDN)",
        emoji: "🌍",
        overview: "CDNs store content on servers worldwide for faster access."
    },
    22: {
        name: "Single sign-on",
        emoji: "🚪",
        overview: "SSO lets users log in once to access multiple systems securely."
    },
    23: {
        name: "HTML5 Canvas",
        emoji: "🎨",
        overview: "Canvas provides an API for drawing graphics in the browser."
    },
    24: {
        name: "Cookies",
        emoji: "🍪",
        overview: "Cookies store small amounts of data sent between client and server."
    },
    25: {
        name: "Session, JWT, httpOnly",
        emoji: "🎫",
        overview: "Sessions and JWTs track logins; httpOnly flags protect from script access."
    },
    26: {
        name: "Local storage",
        emoji: "💾",
        overview: "LocalStorage saves key-value data in the browser persistently."
    },
    27: {
        name: "Web workers",
        emoji: "👷",
        overview: "Web Workers run scripts on background threads to prevent blocking."
    },
    28: {
        name: "Injection attacks",
        emoji: "💉",
        overview: "Malicious input that manipulates queries or scripts."
    },
    29: {
        name: "Web security best practices",
        emoji: "🛡️",
        overview: "Use HTTPS, sanitize inputs, and secure headers to protect applications."
    },
    30: {
        name: "Encryption",
        emoji: "🔒",
        overview: "Encryption encodes information so only authorized users can read it."
    },
    31: {
        name: "Hashing",
        emoji: "#️⃣",
        overview: "Hashing turns data into a fixed-length string for integrity checks."
    },
    32: {
        name: "RDBMS",
        emoji: "🗄️",
        overview: "Relational databases organize data into tables linked by relationships."
    },
    33: {
        name: "CRUD",
        emoji: "✏️",
        overview: "Basic database operations: Create, Read, Update, Delete."
    },
    34: {
        name: "1NF",
        emoji: "📋",
        overview: "First Normal Form removes repeating groups and ensures atomic values."
    },
    35: {
        name: "2NF",
        emoji: "🧩",
        overview: "Second Normal Form removes partial dependencies from composite keys."
    }, 
    36: {
        name: "3NF",
        emoji: "🏗️",
        overview: "Third Normal Form removes transitive dependencies—non-key attributes should depend only on the primary key, not on other non-key attributes."
    },
};