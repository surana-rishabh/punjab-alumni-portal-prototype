// Application Data
const appData = {
  "universities": [
    {"id": 1, "name": "Panjab University", "location": "Chandigarh", "established": 1882, "alumni_count": 25000},
    {"id": 2, "name": "Punjabi University", "location": "Patiala", "established": 1962, "alumni_count": 18000},
    {"id": 3, "name": "Guru Nanak Dev University", "location": "Amritsar", "established": 1969, "alumni_count": 22000},
    {"id": 4, "name": "Punjab Agricultural University", "location": "Ludhiana", "established": 1962, "alumni_count": 15000},
    {"id": 5, "name": "IIT Ropar", "location": "Ropar", "established": 2008, "alumni_count": 3500}
  ],
  "departments": [
    {"name": "Computer Science", "code": "CSE"},
    {"name": "Electrical Engineering", "code": "EE"},
    {"name": "Mechanical Engineering", "code": "ME"},
    {"name": "Civil Engineering", "code": "CE"},
    {"name": "Business Administration", "code": "MBA"},
    {"name": "Medicine", "code": "MBBS"},
    {"name": "Agriculture", "code": "AGR"},
    {"name": "Arts & Humanities", "code": "AH"}
  ],
  "alumni_data": [
    {
      "id": 1,
      "name": "Rajesh Kumar Singh",
      "university": "Panjab University",
      "department": "Computer Science",
      "graduation_year": 2018,
      "current_position": "Senior Software Engineer",
      "current_company": "Google India",
      "location": "Bangalore",
      "experience": 6,
      "skills": ["Python", "Machine Learning", "Cloud Computing"],
      "engagement_points": 850,
      "achievements": ["Tech Leader Award 2023", "Published 5 research papers"],
      "willing_to_mentor": true
    },
    {
      "id": 2,
      "name": "Priya Sharma",
      "university": "Guru Nanak Dev University",
      "department": "Business Administration",
      "graduation_year": 2019,
      "current_position": "Product Manager",
      "current_company": "Microsoft",
      "location": "Hyderabad",
      "experience": 5,
      "skills": ["Product Strategy", "Data Analysis", "Leadership"],
      "engagement_points": 720,
      "achievements": ["Rising Star Award", "Led product launch with $2M revenue"],
      "willing_to_mentor": true
    },
    {
      "id": 3,
      "name": "Amrit Singh Gill",
      "university": "Punjab Agricultural University",
      "department": "Agriculture",
      "graduation_year": 2020,
      "current_position": "Agricultural Scientist",
      "current_company": "ICAR",
      "location": "New Delhi",
      "experience": 4,
      "skills": ["Crop Science", "Research", "Sustainable Farming"],
      "engagement_points": 650,
      "achievements": ["Best Young Scientist Award", "Developed drought-resistant wheat variety"],
      "willing_to_mentor": true
    }
  ],
  "events": [
    {
      "id": 1,
      "title": "Punjab Alumni Global Summit 2025",
      "date": "2025-11-15",
      "time": "09:00 AM",
      "venue": "India Habitat Centre, New Delhi",
      "type": "conference",
      "description": "Annual gathering of Punjab alumni worldwide for networking and knowledge sharing",
      "max_participants": 500,
      "registered": 287,
      "organizer": "Punjab Alumni Association",
      "registration_fee": 2500,
      "image": "summit2025.jpg"
    },
    {
      "id": 2,
      "title": "Tech Innovation Workshop",
      "date": "2025-10-20",
      "time": "02:00 PM",
      "venue": "Virtual Event",
      "type": "workshop",
      "description": "Hands-on workshop on latest tech trends including AI, ML, and blockchain",
      "max_participants": 200,
      "registered": 156,
      "organizer": "Tech Alumni Network",
      "registration_fee": 0,
      "image": "tech_workshop.jpg"
    },
    {
      "id": 3,
      "title": "Entrepreneurship Bootcamp",
      "date": "2025-10-25",
      "time": "10:00 AM",
      "venue": "Chandigarh University Campus",
      "type": "bootcamp",
      "description": "3-day intensive program for aspiring entrepreneurs with mentorship and funding opportunities",
      "max_participants": 100,
      "registered": 89,
      "organizer": "Punjab Startup Hub",
      "registration_fee": 5000,
      "image": "startup_bootcamp.jpg"
    }
  ],
  "jobs": [
    {
      "id": 1,
      "title": "Senior Data Scientist",
      "company": "Infosys Limited",
      "location": "Mohali, Punjab",
      "type": "Full-time",
      "experience": "3-5 years",
      "salary_range": "15-25 LPA",
      "description": "Looking for experienced data scientist to work on cutting-edge ML projects",
      "skills_required": ["Python", "Machine Learning", "SQL", "Statistics"],
      "posted_by": "Alumni Recruiter",
      "posted_date": "2025-09-10",
      "applications": 23
    },
    {
      "id": 2,
      "title": "Product Manager - Fintech",
      "company": "PayTM",
      "location": "Noida",
      "type": "Full-time",
      "experience": "4-7 years",
      "salary_range": "20-35 LPA",
      "description": "Lead product development for innovative financial products",
      "skills_required": ["Product Strategy", "Fintech", "Analytics", "Leadership"],
      "posted_by": "HR Team",
      "posted_date": "2025-09-12",
      "applications": 31
    },
    {
      "id": 3,
      "title": "Agricultural Research Associate",
      "company": "Punjab Agricultural University",
      "location": "Ludhiana",
      "type": "Full-time",
      "experience": "1-3 years",
      "salary_range": "8-12 LPA",
      "description": "Research position focusing on sustainable agriculture and crop improvement",
      "skills_required": ["Agricultural Science", "Research", "Data Analysis"],
      "posted_by": "University Placement Cell",
      "posted_date": "2025-09-08",
      "applications": 18
    }
  ],
  "statistics": {
    "total_alumni": 83500,
    "active_users": 15420,
    "universities_connected": 25,
    "events_conducted": 145,
    "jobs_posted": 892,
    "successful_placements": 1247,
    "total_donations": 12500000,
    "mentor_sessions": 3450
  },
  "achievements": [
    {"name": "First Login", "description": "Welcome to the platform!", "points": 50, "icon": "🎉"},
    {"name": "Profile Completed", "description": "100% profile completion", "points": 100, "icon": "✅"},
    {"name": "Event Attendee", "description": "Attended first event", "points": 150, "icon": "🎪"},
    {"name": "Job Applied", "description": "Applied for first job", "points": 75, "icon": "💼"},
    {"name": "Mentor", "description": "Started mentoring students", "points": 300, "icon": "🎓"},
    {"name": "Networker", "description": "Connected with 10+ alumni", "points": 200, "icon": "🤝"},
    {"name": "Top Contributor", "description": "Posted valuable content", "points": 250, "icon": "⭐"}
  ],
  "chatbot_responses": [
    {"trigger": "hello", "response": "Hi! Welcome to Punjab Alumni Portal. How can I help you today?"},
    {"trigger": "hi", "response": "Hello there! How can I assist you with the Punjab Alumni Portal today?"},
    {"trigger": "events", "response": "You can find all upcoming events in the Events section. We have tech workshops, networking meetups, and the annual summit coming up!"},
    {"trigger": "jobs", "response": "Check out our Job Portal for latest opportunities. We have openings in tech, agriculture, healthcare and more!"},
    {"trigger": "register", "response": "To register, click on 'Register' and fill in your details. You'll need your university and graduation year information."},
    {"trigger": "contact", "response": "You can reach us at support@punjabalumni.gov.in or call +91-172-123-4567"},
    {"trigger": "help", "response": "I can help you with navigation, events, jobs, registration, and general questions about the platform!"}
  ]
};

// Global State
let currentUser = null;
let isLoggedIn = false;

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Punjab Alumni Portal - Initializing...');
    initializeApp();
});

function initializeApp() {
    try {
        // Setup navigation
        setupNavigation();
        
        // Setup authentication
        setupAuthentication();
        
        // Setup chatbot
        setupChatbot();
        
        // Setup dashboard
        setupDashboard();
        
        // Setup directory
        setupDirectory();
        
        // Setup events
        setupEvents();
        
        // Setup jobs
        setupJobs();
        
        // Setup analytics
        setupAnalytics();
        
        // Show initial page
        showPage('home');
        
        console.log('Punjab Alumni Portal - Initialized successfully');
    } catch (error) {
        console.error('Error initializing app:', error);
    }
}

// Navigation System
function setupNavigation() {
    console.log('Setting up navigation...');
    
    const navLinks = document.querySelectorAll('.nav-link');
    console.log('Found nav links:', navLinks.length);
    
    navLinks.forEach((link, index) => {
        console.log(`Setting up nav link ${index}:`, link.getAttribute('data-page'));
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Nav link clicked:', this.getAttribute('data-page'));
            
            const page = this.getAttribute('data-page');
            
            // Update active nav link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding page
            showPage(page);
        });
    });
}

function showPage(pageId) {
    console.log('Showing page:', pageId);
    
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    const targetPage = document.getElementById(pageId + 'Page');
    if (targetPage) {
        targetPage.classList.add('active');
        console.log('Page shown:', pageId);
        
        // Special handling for different pages
        if (pageId === 'directory') {
            populateDirectory();
        } else if (pageId === 'events') {
            populateEvents();
        } else if (pageId === 'jobs') {
            populateJobs();
        } else if (pageId === 'analytics') {
            setTimeout(() => loadAnalyticsCharts(), 100);
        }
    } else {
        console.error('Page not found:', pageId + 'Page');
    }
}

// Authentication System
function setupAuthentication() {
    console.log('Setting up authentication...');
    
    // Get all auth buttons
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const heroLogin = document.getElementById('heroLogin');
    const heroRegister = document.getElementById('heroRegister');
    const switchToRegister = document.getElementById('switchToRegister');
    const switchToLogin = document.getElementById('switchToLogin');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const logoutBtn = document.getElementById('logoutBtn');
    
    console.log('Auth elements found:', {
        loginBtn: !!loginBtn,
        registerBtn: !!registerBtn,
        heroLogin: !!heroLogin,
        heroRegister: !!heroRegister
    });
    
    // Event listeners for buttons
    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Login button clicked');
            showPage('login');
        });
    }
    
    if (registerBtn) {
        registerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Register button clicked');
            showPage('register');
        });
    }
    
    if (heroLogin) {
        heroLogin.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Hero login button clicked');
            showPage('login');
        });
    }
    
    if (heroRegister) {
        heroRegister.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Hero register button clicked');
            showPage('register');
        });
    }
    
    if (switchToRegister) {
        switchToRegister.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Switch to register clicked');
            showPage('register');
        });
    }
    
    if (switchToLogin) {
        switchToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Switch to login clicked');
            showPage('login');
        });
    }
    
    // Form submissions
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            handleLogout();
        });
    }
}

function handleLogin(e) {
    e.preventDefault();
    console.log('Handling login...');
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (email && password) {
        // Simulate login
        currentUser = {
            name: "Alumni User",
            email: email,
            university: "Panjab University",
            graduation_year: 2020,
            engagement_points: 850
        };
        isLoggedIn = true;
        
        console.log('User logged in:', currentUser);
        updateUIForLoggedInUser();
        showPage('dashboard');
        showNotification('Welcome back! Login successful.', 'success');
    } else {
        showNotification('Please fill in all fields.', 'error');
    }
}

function handleRegister(e) {
    e.preventDefault();
    console.log('Handling registration...');
    
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const university = document.getElementById('registerUniversity').value;
    const year = document.getElementById('registerYear').value;
    const password = document.getElementById('registerPassword').value;
    
    if (name && email && university && year && password) {
        // Simulate registration
        currentUser = {
            name: name,
            email: email,
            university: university,
            graduation_year: parseInt(year),
            engagement_points: 50
        };
        isLoggedIn = true;
        
        console.log('User registered:', currentUser);
        updateUIForLoggedInUser();
        showPage('dashboard');
        showNotification('Registration successful! Welcome to Punjab Alumni Portal.', 'success');
    } else {
        showNotification('Please fill in all fields.', 'error');
    }
}

function handleLogout() {
    console.log('Handling logout...');
    currentUser = null;
    isLoggedIn = false;
    updateUIForLoggedOutUser();
    showPage('home');
    showNotification('Logged out successfully.', 'info');
}

function updateUIForLoggedInUser() {
    console.log('Updating UI for logged in user');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const userNameSpan = document.getElementById('userNameSpan');
    
    if (loginBtn) loginBtn.style.display = 'none';
    if (registerBtn) registerBtn.style.display = 'none';
    if (userNameSpan) userNameSpan.textContent = currentUser.name;
}

function updateUIForLoggedOutUser() {
    console.log('Updating UI for logged out user');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    
    if (loginBtn) loginBtn.style.display = 'inline-flex';
    if (registerBtn) registerBtn.style.display = 'inline-flex';
}

// Dashboard Setup
function setupDashboard() {
    console.log('Setting up dashboard...');
    // Dashboard is populated when page is shown
}

// Directory System
function setupDirectory() {
    console.log('Setting up directory...');
    
    const universityFilter = document.getElementById('universityFilter');
    const departmentFilter = document.getElementById('departmentFilter');
    const locationFilter = document.getElementById('locationFilter');
    const searchFilter = document.getElementById('searchFilter');
    
    // Add event listeners for filters
    if (universityFilter) universityFilter.addEventListener('change', filterDirectory);
    if (departmentFilter) departmentFilter.addEventListener('change', filterDirectory);
    if (locationFilter) locationFilter.addEventListener('input', filterDirectory);
    if (searchFilter) searchFilter.addEventListener('input', filterDirectory);
}

function populateDirectory() {
    console.log('Populating directory...');
    const grid = document.getElementById('directoryGrid');
    if (!grid) {
        console.error('Directory grid not found');
        return;
    }
    
    grid.innerHTML = appData.alumni_data.map(alumni => `
        <div class="alumni-card" data-university="${alumni.university}" data-department="${alumni.department}" data-location="${alumni.location}">
            <div class="alumni-header">
                <div class="alumni-avatar">${alumni.name.charAt(0)}</div>
                <div class="alumni-info">
                    <h3>${alumni.name}</h3>
                    <p class="alumni-position">${alumni.current_position} at ${alumni.current_company}</p>
                </div>
            </div>
            <div class="alumni-details">
                <p><strong>University:</strong> ${alumni.university}</p>
                <p><strong>Department:</strong> ${alumni.department}</p>
                <p><strong>Location:</strong> ${alumni.location}</p>
                <p><strong>Graduation:</strong> ${alumni.graduation_year}</p>
                <p><strong>Experience:</strong> ${alumni.experience} years</p>
            </div>
            <div class="alumni-skills">
                ${alumni.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
            <div class="alumni-actions">
                <button class="btn btn--primary btn--sm" onclick="connectWithAlumni(${alumni.id})">Connect</button>
                <button class="btn btn--outline btn--sm" onclick="viewAlumniProfile(${alumni.id})">View Profile</button>
                ${alumni.willing_to_mentor ? `<button class="btn btn--outline btn--sm" onclick="requestMentorship(${alumni.id})">Mentor Request</button>` : ''}
            </div>
        </div>
    `).join('');
    
    console.log('Directory populated with', appData.alumni_data.length, 'alumni');
}

function filterDirectory() {
    const universityFilter = document.getElementById('universityFilter')?.value.toLowerCase() || '';
    const departmentFilter = document.getElementById('departmentFilter')?.value.toLowerCase() || '';
    const locationFilter = document.getElementById('locationFilter')?.value.toLowerCase() || '';
    const searchFilter = document.getElementById('searchFilter')?.value.toLowerCase() || '';
    
    const cards = document.querySelectorAll('.alumni-card');
    
    cards.forEach(card => {
        const university = card.getAttribute('data-university').toLowerCase();
        const department = card.getAttribute('data-department').toLowerCase();
        const location = card.getAttribute('data-location').toLowerCase();
        const text = card.textContent.toLowerCase();
        
        const universityMatch = !universityFilter || university.includes(universityFilter);
        const departmentMatch = !departmentFilter || department.includes(departmentFilter);
        const locationMatch = !locationFilter || location.includes(locationFilter);
        const searchMatch = !searchFilter || text.includes(searchFilter);
        
        if (universityMatch && departmentMatch && locationMatch && searchMatch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Events System
function setupEvents() {
    console.log('Setting up events...');
}

function populateEvents() {
    console.log('Populating events...');
    const grid = document.getElementById('eventsGrid');
    if (!grid) {
        console.error('Events grid not found');
        return;
    }
    
    grid.innerHTML = appData.events.map(event => `
        <div class="event-card">
            <div class="event-image">📅</div>
            <div class="event-content">
                <div class="event-meta">
                    <span>${formatDate(event.date)} • ${event.time}</span>
                    <span class="status status--${event.type === 'workshop' ? 'info' : 'success'}">${event.type}</span>
                </div>
                <h3>${event.title}</h3>
                <p class="event-description">${event.description}</p>
                <div class="event-footer">
                    <div>
                        <p><strong>Venue:</strong> ${event.venue}</p>
                        <p><strong>Organizer:</strong> ${event.organizer}</p>
                        <p><strong>Registered:</strong> ${event.registered}/${event.max_participants}</p>
                    </div>
                    <div>
                        <p class="event-price">${event.registration_fee === 0 ? 'Free' : '₹' + event.registration_fee}</p>
                        <button class="btn btn--primary" onclick="registerForEvent(${event.id})">Register Now</button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    console.log('Events populated with', appData.events.length, 'events');
}

// Jobs System
function setupJobs() {
    console.log('Setting up jobs...');
    
    const locationFilter = document.getElementById('jobLocationFilter');
    const experienceFilter = document.getElementById('experienceFilter');
    const typeFilter = document.getElementById('jobTypeFilter');
    
    if (locationFilter) locationFilter.addEventListener('change', filterJobs);
    if (experienceFilter) experienceFilter.addEventListener('change', filterJobs);
    if (typeFilter) typeFilter.addEventListener('change', filterJobs);
}

function populateJobs() {
    console.log('Populating jobs...');
    const grid = document.getElementById('jobsGrid');
    if (!grid) {
        console.error('Jobs grid not found');
        return;
    }
    
    grid.innerHTML = appData.jobs.map(job => `
        <div class="job-card" data-location="${job.location}" data-experience="${job.experience}" data-type="${job.type}">
            <div class="job-header">
                <div class="job-info">
                    <h3>${job.title}</h3>
                    <p class="job-company-name">${job.company}</p>
                    <div class="job-meta">
                        <span>📍 ${job.location}</span>
                        <span>💼 ${job.type}</span>
                        <span>⏱️ ${job.experience}</span>
                        <span class="job-salary">💰 ${job.salary_range}</span>
                    </div>
                </div>
            </div>
            <p class="job-description">${job.description}</p>
            <div class="job-skills">
                ${job.skills_required.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
            <div class="job-footer">
                <div>
                    <span>Posted by ${job.posted_by}</span>
                    <span>Posted on ${formatDate(job.posted_date)}</span>
                    <span>${job.applications} applications</span>
                </div>
                <button class="btn btn--primary" onclick="applyForJob(${job.id})">Apply Now</button>
            </div>
        </div>
    `).join('');
    
    console.log('Jobs populated with', appData.jobs.length, 'jobs');
}

function filterJobs() {
    const locationFilter = document.getElementById('jobLocationFilter')?.value.toLowerCase() || '';
    const experienceFilter = document.getElementById('experienceFilter')?.value.toLowerCase() || '';
    const typeFilter = document.getElementById('jobTypeFilter')?.value.toLowerCase() || '';
    
    const cards = document.querySelectorAll('.job-card');
    
    cards.forEach(card => {
        const location = card.getAttribute('data-location').toLowerCase();
        const experience = card.getAttribute('data-experience').toLowerCase();
        const type = card.getAttribute('data-type').toLowerCase();
        
        const locationMatch = !locationFilter || location.includes(locationFilter);
        const experienceMatch = !experienceFilter || experience.includes(experienceFilter);
        const typeMatch = !typeFilter || type.includes(typeFilter);
        
        if (locationMatch && experienceMatch && typeMatch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Analytics System
function setupAnalytics() {
    console.log('Setting up analytics...');
}

function loadAnalyticsCharts() {
    console.log('Loading analytics charts...');
    try {
        loadAlumniDistributionChart();
        loadEngagementChart();
    } catch (error) {
        console.error('Error loading charts:', error);
    }
}

function loadAlumniDistributionChart() {
    const ctx = document.getElementById('alumniChart');
    if (!ctx) {
        console.error('Alumni chart canvas not found');
        return;
    }
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: appData.universities.map(u => u.name),
            datasets: [{
                data: appData.universities.map(u => u.alumni_count),
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Alumni Distribution by University'
                },
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function loadEngagementChart() {
    const ctx = document.getElementById('engagementChart');
    if (!ctx) {
        console.error('Engagement chart canvas not found');
        return;
    }
    
    const monthlyData = [12000, 13500, 14200, 15000, 15420];
    const months = ['May', 'Jun', 'Jul', 'Aug', 'Sep'];
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: 'Active Users',
                data: monthlyData,
                borderColor: '#1FB8CD',
                backgroundColor: 'rgba(31, 184, 205, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Monthly Active Users Growth'
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 11000
                }
            }
        }
    });
}

// Chatbot System
function setupChatbot() {
    console.log('Setting up chatbot...');
    
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');
    
    console.log('Chatbot elements found:', {
        toggle: !!chatbotToggle,
        window: !!chatbotWindow,
        close: !!chatbotClose,
        input: !!chatbotInput,
        send: !!chatbotSend
    });
    
    if (chatbotToggle && chatbotWindow) {
        chatbotToggle.addEventListener('click', () => {
            console.log('Chatbot toggle clicked');
            chatbotWindow.classList.toggle('hidden');
        });
    }
    
    if (chatbotClose && chatbotWindow) {
        chatbotClose.addEventListener('click', () => {
            console.log('Chatbot close clicked');
            chatbotWindow.classList.add('hidden');
        });
    }
    
    if (chatbotSend) {
        chatbotSend.addEventListener('click', sendChatbotMessage);
    }
    
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendChatbotMessage();
            }
        });
    }
}

function sendChatbotMessage() {
    console.log('Sending chatbot message...');
    
    const input = document.getElementById('chatbotInput');
    const messages = document.getElementById('chatbotMessages');
    const message = input.value.trim();
    
    if (!message) return;
    
    console.log('User message:', message);
    
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'chatbot-message user';
    userMessage.innerHTML = `<div class="message-content">${message}</div>`;
    messages.appendChild(userMessage);
    
    // Clear input
    input.value = '';
    
    // Generate bot response
    setTimeout(() => {
        const response = generateChatbotResponse(message);
        console.log('Bot response:', response);
        
        const botMessage = document.createElement('div');
        botMessage.className = 'chatbot-message bot';
        botMessage.innerHTML = `<div class="message-content">${response}</div>`;
        messages.appendChild(botMessage);
        messages.scrollTop = messages.scrollHeight;
    }, 1000);
    
    messages.scrollTop = messages.scrollHeight;
}

function generateChatbotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    for (const response of appData.chatbot_responses) {
        if (lowerMessage.includes(response.trigger)) {
            return response.response;
        }
    }
    
    // Default responses for common patterns
    if (lowerMessage.includes('thank')) {
        return "You're welcome! Is there anything else I can help you with?";
    }
    
    if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
        return "Goodbye! Feel free to reach out anytime. Have a great day!";
    }
    
    if (lowerMessage.includes('profile')) {
        return "To update your profile, go to Dashboard and click on 'Edit Profile'. You can add your work experience, skills, and achievements there.";
    }
    
    return "I understand you're asking about: '" + message + "'. For detailed assistance, please contact our support team at support@punjabalumni.gov.in";
}

// Global functions for onclick handlers
window.registerForEvent = function(eventId) {
    console.log('Registering for event:', eventId);
    if (!isLoggedIn) {
        showNotification('Please login to register for events.', 'warning');
        showPage('login');
        return;
    }
    
    const event = appData.events.find(e => e.id === eventId);
    if (event) {
        showNotification(`Successfully registered for ${event.title}!`, 'success');
        event.registered++;
        populateEvents();
    }
};

window.applyForJob = function(jobId) {
    console.log('Applying for job:', jobId);
    if (!isLoggedIn) {
        showNotification('Please login to apply for jobs.', 'warning');
        showPage('login');
        return;
    }
    
    const job = appData.jobs.find(j => j.id === jobId);
    if (job) {
        showNotification(`Application submitted for ${job.title} at ${job.company}!`, 'success');
        job.applications++;
        populateJobs();
    }
};

window.connectWithAlumni = function(alumniId) {
    console.log('Connecting with alumni:', alumniId);
    if (!isLoggedIn) {
        showNotification('Please login to connect with alumni.', 'warning');
        showPage('login');
        return;
    }
    
    const alumni = appData.alumni_data.find(a => a.id === alumniId);
    if (alumni) {
        showNotification(`Connection request sent to ${alumni.name}!`, 'success');
    }
};

window.viewAlumniProfile = function(alumniId) {
    console.log('Viewing alumni profile:', alumniId);
    const alumni = appData.alumni_data.find(a => a.id === alumniId);
    if (alumni) {
        showNotification(`Viewing profile for ${alumni.name}`, 'info');
    }
};

window.requestMentorship = function(alumniId) {
    console.log('Requesting mentorship from:', alumniId);
    if (!isLoggedIn) {
        showNotification('Please login to request mentorship.', 'warning');
        showPage('login');
        return;
    }
    
    const alumni = appData.alumni_data.find(a => a.id === alumniId);
    if (alumni) {
        showNotification(`Mentorship request sent to ${alumni.name}!`, 'success');
    }
};

// Utility Functions
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
}

function showNotification(message, type = 'info') {
    console.log('Showing notification:', type, message);
    
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--color-${type === 'success' ? 'success' : type === 'error' ? 'error' : type === 'warning' ? 'warning' : 'info'});
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
        font-family: var(--font-family-base);
        font-size: 14px;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);