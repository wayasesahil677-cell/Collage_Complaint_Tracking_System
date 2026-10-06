
const app = document.getElementById("app");
const toastBox = document.getElementById("toast-container");

const categories = ["Academic","Infrastructure","Hostel","Library","IT/Computer","Transport","Canteen","Cleanliness","Faculty/Staff","Other"];
const complaints = [
  {id:"CMP-2026-001", title:"Projector not working", category:"Infrastructure", dept:"IT Department", priority:"High", status:"In Progress", date:"06 Oct 2026"},
  {id:"CMP-2026-002", title:"Water leakage in classroom", category:"Infrastructure", dept:"Maintenance", priority:"Medium", status:"Resolved", date:"05 Oct 2026"},
  {id:"CMP-2026-003", title:"Library computer not working", category:"Library", dept:"IT Department", priority:"Medium", status:"Under Review", date:"04 Oct 2026"},
  {id:"CMP-2026-004", title:"Hostel water supply issue", category:"Hostel", dept:"Maintenance", priority:"Low", status:"Submitted", date:"03 Oct 2026"},
  {id:"CMP-2026-005", title:"Canteen food quality", category:"Canteen", dept:"Canteen", priority:"Medium", status:"Assigned", date:"02 Oct 2026"}
];

let state = {role:"student", page:"dashboard", dark:false};

function toast(msg){const t=document.createElement("div");t.className="toast";t.textContent=msg;toastBox.appendChild(t);setTimeout(()=>t.remove(),2600)}
function nav(page){state.page=page;render()}
function setRole(role){state.role=role;state.page="dashboard";render()}
function toggleSidebar(){document.querySelector(".sidebar")?.classList.toggle("open")}
function statusClass(s){return ({Submitted:"submitted","Under Review":"review",Assigned:"assigned","In Progress":"progress",Resolved:"resolved",Closed:"closed"})[s]||"submitted"}
function priorityClass(s){return s.toLowerCase()}

function landing(){
return `<header class="topbar"><div class="brand"><div class="logo">CC</div> College Complaint System</div>
<nav class="navlinks"><a href="#home">Home</a><a href="#features">Features</a><a href="#how">How It Works</a><a href="#categories">Categories</a><a href="#" onclick="nav('track');return false">Track Complaint</a><button class="btn btn-outline" onclick="nav('login')">Login</button><button class="btn btn-primary" onclick="nav('register')">Register</button></nav></header>
<section class="hero" id="home"><div class="container hero-grid"><div><span class="eyebrow">COLLEGE ISSUE MANAGEMENT PLATFORM</span><h1>College Complaint & Issue Tracking System</h1><p>Report college issues easily, track every complaint, and stay informed until your problem is resolved. A transparent digital platform for students, staff and administrators.</p><div class="actions"><button class="btn btn-primary" onclick="nav('login')">Submit Your Complaint →</button><button class="btn btn-outline" onclick="nav('track')">Track Complaint</button></div></div>
<div class="hero-visual"><div class="mock-head"><span class="mock-title">Complaint Overview</span><span class="badge progress">Live Dashboard</span></div><div class="mock-grid"><div class="mini-card"><div class="mini-label">Total Complaints</div><div class="mini-number">248</div></div><div class="mini-card"><div class="mini-label">Resolved</div><div class="mini-number">176</div></div><div class="mini-card"><div class="mini-label">Pending</div><div class="mini-number">48</div></div><div class="mini-card"><div class="mini-label">In Progress</div><div class="mini-number">24</div></div></div><div style="height:12px"></div><div class="panel" style="margin:0"><div class="panel-head"><h3>Recent complaint</h3><span class="badge progress">In Progress</span></div><strong>CMP-2026-001</strong><p class="small muted">Projector not working · IT Department</p></div></div></div></section>
<section class="section" id="features"><div class="container"><div class="section-title"><h2>Everything in one place</h2><p>Simple tools for students and powerful controls for college administrators.</p></div><div class="feature-grid">
${["Easy Complaint Submission","Real-Time Tracking","Transparent Updates","Department Assignment","Admin Dashboard","Notification System"].map((x,i)=>`<div class="feature"><div class="iconbox">${["＋","⌁","✓","↗","▦","●"][i]}</div><h3>${x}</h3><p>${["Submit issues with category, priority and attachments.","Track complaints using a unique Complaint ID.","Follow the complete status timeline.","Route issues to the right department and staff.","Monitor trends, workload and resolution rates.","Get notified whenever complaint status changes."][i]}</p></div>`).join("")}</div></div></section>
<section class="section" id="how" style="background:#eef5ff"><div class="container"><div class="section-title"><h2>How it works</h2><p>Four simple steps from reporting to resolution.</p></div><div class="steps">${["Submit","Review","Resolve","Track"].map((x,i)=>`<div class="step"><div class="step-num">0${i+1}</div><h3>${x}</h3><p>${["Student submits a complaint.","Admin reviews and assigns it.","Department staff works on the issue.","Student follows updates until closure."][i]}</p></div>`).join("")}</div></div></section>
<section class="section" id="categories"><div class="container"><div class="section-title"><h2>Complaint categories</h2><p>Report any issue through the most relevant department or category.</p></div><div class="category-grid">${categories.map((c,i)=>`<div class="category"><div class="iconbox">${["A","⌂","H","L","IT","T","C","✓","F","•"][i]}</div><h3>${c}</h3></div>`).join("")}</div></div></section>
<section class="section"><div class="container"><div class="stats">${[["248","Total Complaints"],["176","Resolved Complaints"],["48","Pending Complaints"],["24","In Progress"]].map(x=>`<div class="stat"><div class="stat-top"><span class="muted small">${x[1]}</span><span class="badge progress">Live</span></div><div class="stat-value">${x[0]}</div></div>`).join("")}</div></div></section>
<footer class="footer"><div class="container footer-grid"><div><h3>College Complaint & Issue Tracking System</h3><p>Report. Track. Resolve. A centralized platform for transparent college issue management.</p></div><div><h3>Quick Links</h3><ul><li>Home</li><li>Features</li><li>Track Complaint</li><li>Login</li></ul></div><div><h3>Contact</h3><p>college@example.edu<br>+91 98765 43210<br>College Campus, Maharashtra</p></div></div><div class="container footer-bottom">© 2026 College Complaint System. All rights reserved.</div></footer>`;
}

function auth(type){
const register=type==="register";
return `<div class="auth-page"><div class="auth-side"><div><div class="brand" style="color:#fff"><div class="logo">CC</div> College Complaint System</div><h1>${register?"Create your student account":"Welcome back!"}</h1><p>${register?"Join the college complaint management platform and make issue reporting simple, transparent and trackable.":"Login to your student account and stay connected with your complaint updates."}</p><div class="panel" style="margin-top:25px;background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.2);color:#fff"><strong>Report. Track. Resolve.</strong><p style="color:#dceaff;margin-bottom:0">A smarter way to manage college issues.</p></div></div></div>
<div class="auth-form"><div class="auth-card"><div class="brand" style="margin-bottom:22px"><div class="logo">CC</div>${register?"Create Account":"Student Login"}</div>
${register?`<div class="form-grid"><div class="field"><label>Full Name</label><input placeholder="John Doe"></div><div class="field"><label>Student ID</label><input placeholder="STU-2026-001"></div></div><div class="field"><label>Email</label><input type="email" placeholder="student@college.edu"></div><div class="form-grid"><div class="field"><label>Phone Number</label><input placeholder="+91 98765 43210"></div><div class="field"><label>Department</label><select><option>Select department</option><option>Computer Engineering</option><option>Mechanical</option><option>Civil</option><option>Electrical</option></select></div></div><div class="form-grid"><div class="field"><label>Password</label><input type="password" placeholder="••••••••"></div><div class="field"><label>Confirm Password</label><input type="password" placeholder="••••••••"></div></div><button class="btn btn-primary full" onclick="toast('Account created successfully');setRole('student')">Create Account</button>`:
`<div class="field"><label>Student ID / Email</label><input placeholder="Enter your student ID or email"></div><div class="field"><label>Password</label><input type="password" placeholder="Enter your password"></div><div class="checkrow"><span>Remember me</span><a href="#" onclick="nav('forgot');return false" style="color:var(--primary)">Forgot password?</a></div><button class="btn btn-primary full" onclick="setRole('student')">Login</button><div class="small muted" style="text-align:center;margin-top:17px">Demo roles: <button class="btn btn-light" onclick="setRole('student')" style="padding:5px 8px">Student</button> <button class="btn btn-light" onclick="setRole('staff')" style="padding:5px 8px">Staff</button> <button class="btn btn-light" onclick="setRole('admin')" style="padding:5px 8px">Admin</button></div>`}
<div class="small muted" style="text-align:center;margin-top:20px">${register?"Already have an account?":"Don't have an account?"} <a href="#" onclick="nav('${register?"login":"register"}');return false" style="color:var(--primary);font-weight:700">${register?"Login":"Create account"}</a></div>
<div style="text-align:center;margin-top:12px"><a href="#" onclick="nav('home');return false" class="small muted">← Back to home</a></div></div></div></div>`;
}

function forgot(){return `<div class="auth-page"><div class="auth-side"><div><div class="brand" style="color:#fff"><div class="logo">CC</div> College Complaint System</div><h1>Reset your password</h1><p>Enter your student email or ID and we’ll send you a secure reset link.</p></div></div><div class="auth-form"><div class="auth-card"><h2>Forgot Password?</h2><p class="muted small">Enter your email or student ID to receive a reset link.</p><div class="field"><label>Email / Student ID</label><input placeholder="Enter your email or student ID"></div><button class="btn btn-primary full" onclick="toast('Reset link sent successfully')">Send Reset Link</button><div style="text-align:center;margin-top:18px"><a href="#" onclick="nav('login');return false" class="small" style="color:var(--primary)">Back to Login</a></div></div></div></div>`}

function side(){
const links=state.role==="student"
? [["dashboard","⌂","Dashboard"],["submit","＋","Submit Complaint"],["track","⌁","Track Complaint"],["history","▤","History"],["notifications","●","Notifications"],["profile","◯","Profile"],["settings","⚙","Settings"]]
: state.role==="admin"
? [["dashboard","⌂","Dashboard"],["manage","▤","Manage Complaints"],["reports","◒","Reports"],["notifications","●","Notifications"],["profile","◯","Profile"],["settings","⚙","Settings"]]
: [["dashboard","⌂","Dashboard"],["assigned","▤","Assigned Complaints"],["notifications","●","Notifications"],["profile","◯","Profile"],["settings","⚙","Settings"]];
return `<aside class="sidebar"><div class="brand"><div class="logo">CC</div> College System</div><div class="side-section">${state.role} menu</div>${links.map(l=>`<a class="side-link ${state.page===l[0]?"active":""}" href="#" onclick="nav('${l[0]}');return false"><span>${l[1]}</span>${l[2]}</a>`).join("")}<div class="side-section">Account</div><a class="side-link" href="#" onclick="nav('home');return false"><span>↪</span>Logout</a></aside>`;
}

function dashTop(){return `<header class="dash-top"><button class="mobile-menu" onclick="toggleSidebar()">☰</button><div><strong>${state.role==="admin"?"Admin Dashboard":state.role==="staff"?"Staff Dashboard":"Student Dashboard"}</strong></div><div class="top-actions"><button class="btn btn-light" onclick="toast('No new notifications')">🔔 <span class="small">3</span></button><div class="avatar">${state.role==="admin"?"AD":state.role==="staff"?"ST":"JD"}</div></div></header>`}

function stats(){
if(state.role==="admin") return [["248","Total Complaints"],["22","New Complaints"],["48","Pending"],["24","In Progress"],["176","Resolved"],["124","Closed"]];
if(state.role==="staff") return [["18","Assigned"],["5","New Assignments"],["9","In Progress"],["4","Resolved"]];
return [["5","Total Complaints"],["1","Pending"],["1","In Progress"],["2","Resolved"]];
}

function table(rows=complaints){
return `<div class="table-wrap"><table class="table"><thead><tr><th>ID</th><th>Subject</th><th>Category</th><th>Department</th><th>Priority</th><th>Status</th><th>Date</th><th>Action</th></tr></thead><tbody>${rows.map(c=>`<tr><td><strong>${c.id}</strong></td><td>${c.title}</td><td>${c.category}</td><td>${c.dept}</td><td><span class="badge ${priorityClass(c.priority)}">${c.priority}</span></td><td><span class="badge ${statusClass(c.status)}">${c.status}</span></td><td>${c.date}</td><td><button class="btn btn-light" style="padding:7px 10px" onclick="nav('track')">View</button></td></tr>`).join("")}</tbody></table></div>`;
}

function dashboard(){
const s=stats();
return `<div class="page"><div class="page-head"><div><h1>Good Morning, ${state.role==="admin"?"Admin":"John Doe"} 👋</h1><p>Here’s an overview of ${state.role==="staff"?"your assigned complaints":"your complaint activity"}.</p></div><button class="btn btn-primary" onclick="nav('${state.role==="student"?"submit":"manage"}')">${state.role==="student"?"+ Submit Complaint":"Manage Complaints"}</button></div>
<div class="dash-stats">${s.map(x=>`<div class="dash-stat"><div class="l">${x[1]}</div><div class="v">${x[0]}</div></div>`).join("")}</div>
<div class="content-grid"><div class="panel"><div class="panel-head"><h3>${state.role==="student"?"Recent Complaints":state.role==="staff"?"Assigned Complaints":"Recent Complaints"}</h3><button class="btn btn-light" onclick="nav('${state.role==="student"?"history":"manage"}')">View all</button></div>${table(complaints.slice(0,4))}</div>
<div><div class="panel"><div class="panel-head"><h3>Quick Actions</h3></div><div class="quick-grid">${(state.role==="student"?[["＋","Submit New Complaint","submit"],["⌁","Track Complaint","track"],["▤","Complaint History","history"]]:state.role==="staff"?[["▤","Assigned Complaints","assigned"],["✓","Update Status","assigned"],["●","Notifications","notifications"]]:[["▤","Manage Complaints","manage"],["◒","View Reports","reports"],["●","Notifications","notifications"]]).map(q=>`<button class="quick" onclick="nav('${q[2]}')"><span class="iconbox" style="margin:0">${q[0]}</span><strong>${q[1]}</strong></button>`).join("")}</div></div><div class="panel"><div class="panel-head"><h3>Complaint Status</h3></div><div class="donut"></div><div class="legend"><span>● In Progress</span><span>● Resolved</span><span>● Pending</span></div></div></div></div></div>`;
}

function submitPage(){
return `<div class="page"><div class="page-head"><div><h1>Submit a New Complaint</h1><p>Fill in the details to report a college issue.</p></div></div><div class="panel"><div class="form-grid"><div class="field"><label>Complaint Title *</label><input id="ctitle" placeholder="e.g. Projector not working"></div><div class="field"><label>Category *</label><select id="ccat"><option value="">Select category</option>${categories.map(x=>`<option>${x}</option>`).join("")}</select></div><div class="field"><label>Department *</label><select><option>IT Department</option><option>Maintenance</option><option>Library</option><option>Administration</option><option>Hostel</option><option>Canteen</option></select></div><div class="field"><label>Location *</label><input placeholder="e.g. Room 205"></div><div class="field span-2"><label>Description *</label><textarea id="cdesc" placeholder="Describe the issue clearly..."></textarea></div><div class="field"><label>Priority</label><select><option>Low</option><option selected>Medium</option><option>High</option></select></div><div class="field"><label>Date</label><input type="date" value="2026-10-06"></div><div class="field span-2"><label>Image / Document Attachment</label><input type="file"></div></div><div class="form-actions"><button class="btn btn-outline" onclick="nav('dashboard')">Cancel</button><button class="btn btn-primary" onclick="submitComplaint()">Submit Complaint</button></div></div></div>`;
}
function submitComplaint(){const title=document.getElementById("ctitle").value.trim();const cat=document.getElementById("ccat").value;if(!title||!cat){toast("Please fill the required fields");return}toast("Complaint submitted: CMP-2026-006");setTimeout(()=>nav("history"),700)}

function track(){
return `<div class="page"><div class="page-head"><div><h1>Track Complaint</h1><p>Enter your Complaint ID to view its latest status.</p></div></div><div class="panel"><div style="display:flex;gap:10px"><input id="trackid" style="flex:1;padding:12px;border:1px solid var(--border);border-radius:10px" placeholder="e.g. CMP-2026-001" value="CMP-2026-001"><button class="btn btn-primary" onclick="showTrack()">Track</button></div></div><div id="track-result">${trackDetails(complaints[0])}</div></div>`;
}
function trackDetails(c){
return `<div class="content-grid"><div class="panel"><div class="panel-head"><h3>Complaint Details</h3><span class="badge ${statusClass(c.status)}">${c.status}</span></div><div class="form-grid"><div><div class="small muted">Complaint ID</div><strong>${c.id}</strong></div><div><div class="small muted">Subject</div><strong>${c.title}</strong></div><div><div class="small muted">Category</div><strong>${c.category}</strong></div><div><div class="small muted">Department</div><strong>${c.dept}</strong></div><div><div class="small muted">Priority</div><span class="badge ${priorityClass(c.priority)}">${c.priority}</span></div><div><div class="small muted">Submitted</div><strong>${c.date}</strong></div><div class="span-2"><div class="small muted">Description</div><p class="small">The reported issue has been registered and is currently being handled by the concerned department.</p></div></div><div class="panel" style="margin-top:18px;background:#f8fbff"><strong>Remarks & Resolution</strong><p class="small muted">Assigned to ${c.dept} for investigation. Staff will update the status after the issue is addressed.</p></div></div><div class="panel"><div class="panel-head"><h3>Complaint Timeline</h3></div><div class="timeline">${["Submitted","Under Review","Assigned","In Progress","Resolved","Closed"].map((x,i)=>`<div class="tl ${i<3?"done":i===3?"current":""}"><strong>${x}</strong><p>${i<=3?"06 Oct 2026 · Status updated":"Waiting for completion"}</p></div>`).join("")}</div></div></div>`;
}
function showTrack(){const id=document.getElementById("trackid").value.trim().toUpperCase();const c=complaints.find(x=>x.id===id)||complaints[0];document.getElementById("track-result").innerHTML=trackDetails(c);toast(c.id===id?"Complaint found":"Showing sample complaint CMP-2026-001")}

function history(){
return `<div class="page"><div class="page-head"><div><h1>Complaint History</h1><p>Search and filter your submitted complaints.</p></div></div><div class="panel"><div class="filters"><input placeholder="Search complaints..." oninput="filterRows(this.value)"><select><option>All Status</option><option>Submitted</option><option>In Progress</option><option>Resolved</option></select><select><option>All Categories</option>${categories.map(x=>`<option>${x}</option>`).join("")}</select><select><option>All Priority</option><option>High</option><option>Medium</option><option>Low</option></select></div><div id="history-table">${table()}</div></div></div>`;
}
function filterRows(v){const rows=complaints.filter(c=>(c.title+" "+c.id+" "+c.category).toLowerCase().includes(v.toLowerCase()));document.getElementById("history-table").innerHTML=table(rows)}

function manage(){
return `<div class="page"><div class="page-head"><div><h1>Manage Complaints</h1><p>Review, assign and resolve college complaints.</p></div></div><div class="panel"><div class="filters"><input placeholder="Search complaints..." oninput="filterRows(this.value)"><select><option>All Categories</option>${categories.map(x=>`<option>${x}</option>`).join("")}</select><select><option>All Status</option><option>Under Review</option><option>Assigned</option><option>In Progress</option><option>Resolved</option></select><select><option>All Departments</option><option>IT Department</option><option>Maintenance</option><option>Library</option></select></div><div id="history-table">${table()}</div></div></div>`;
}

function reports(){
return `<div class="page"><div class="page-head"><div><h1>Reports & Analytics</h1><p>Monitor complaint trends and resolution performance.</p></div></div><div class="chart-grid"><div class="panel"><div class="panel-head"><h3>Complaints by Category</h3></div><div class="bars">${[70,55,85,40,62,50,30].map((h,i)=>`<div class="bar" style="height:${h}%"><span>${["IT","Infra","Hostel","Lib","Acad","Food","Other"][i]}</span></div>`).join("")}</div></div><div class="panel"><div class="panel-head"><h3>Complaints by Status</h3></div><div class="donut"></div><div class="legend"><span>● Submitted</span><span>● Resolved</span><span>● Pending</span><span>● Progress</span></div></div></div><div class="panel"><div class="panel-head"><h3>Complaints Over Time</h3></div><div style="height:170px;padding:10px"><svg width="100%" height="150" viewBox="0 0 700 150" preserveAspectRatio="none"><polyline points="10,125 110,95 210,105 310,65 410,80 510,40 610,55 690,25" fill="none" stroke="#1769e0" stroke-width="4"/><line x1="10" y1="130" x2="690" y2="130" stroke="#dfe6ef"/></svg></div></div></div>`;
}

function notifications(){
return `<div class="page"><div class="page-head"><div><h1>Notifications</h1><p>Stay updated about complaint activity.</p></div><button class="btn btn-light" onclick="toast('All notifications marked as read')">Mark all as read</button></div><div class="panel">${["Complaint CMP-2026-001 has been assigned to IT Department.","Complaint CMP-2026-002 has been resolved.","Complaint CMP-2026-003 is under review.","Complaint CMP-2026-004 was successfully submitted.","Welcome to College Complaint System."].map((n,i)=>`<div style="display:flex;gap:13px;padding:15px 0;border-bottom:1px solid var(--border)"><div class="iconbox" style="margin:0">●</div><div><strong style="font-size:13px">${n}</strong><div class="small muted" style="margin-top:4px">${i+1} hour${i?"s":""} ago</div></div></div>`).join("")}</div></div>`;
}

function profile(){
return `<div class="page"><div class="page-head"><div><h1>Profile</h1><p>Manage your account information.</p></div></div><div class="profile"><div class="panel profile-card"><div class="profile-photo">${state.role==="admin"?"AD":state.role==="staff"?"ST":"JD"}</div><h3>${state.role==="admin"?"Admin User":state.role==="staff"?"Tech Support":"John Doe"}</h3><p class="small muted">${state.role}</p><button class="btn btn-primary" onclick="toast('Profile photo upload opened')">Edit Profile</button></div><div class="panel"><div class="form-grid"><div class="field"><label>Full Name</label><input value="${state.role==="student"?"John Doe":"College User"}"></div><div class="field"><label>Student ID</label><input value="${state.role==="student"?"STU-2026-001":"EMP-001"}"></div><div class="field"><label>Department</label><input value="${state.role==="staff"?"IT Department":"Computer Engineering"}"></div><div class="field"><label>Email</label><input value="user@college.edu"></div><div class="field"><label>Phone Number</label><input value="+91 98765 43210"></div></div><div class="form-actions"><button class="btn btn-primary" onclick="toast('Profile updated successfully')">Save Changes</button></div></div></div></div>`;
}
function settings(){
return `<div class="page"><div class="page-head"><div><h1>Settings</h1><p>Customize your account and notifications.</p></div></div><div class="panel"><h3>Appearance</h3><p class="small muted">Choose your preferred interface mode.</p><button class="btn btn-light" onclick="document.body.classList.toggle('dark-preview');toast('Theme preference updated')">Toggle Light / Dark Mode</button></div><div class="panel"><h3>Notifications</h3><p class="small muted">Complaint status notifications are enabled.</p><label class="small"><input type="checkbox" checked> Email notifications</label><br><label class="small"><input type="checkbox" checked> Complaint status updates</label></div>`;
}

function pageContent(){
if(state.page==="dashboard") return dashboard();
if(state.page==="submit") return submitPage();
if(state.page==="track") return track();
if(state.page==="history") return history();
if(state.page==="manage") return manage();
if(state.page==="reports") return reports();
if(state.page==="assigned") return manage();
if(state.page==="notifications") return notifications();
if(state.page==="profile") return profile();
if(state.page==="settings") return settings();
return dashboard();
}

function dashboardShell(){
return `<div class="dashboard">${side()}<main class="main">${dashTop()}${pageContent()}</main></div>`;
}

function render(){
if(state.page==="home") app.innerHTML=landing();
else if(["login","register","forgot"].includes(state.page)) app.innerHTML=state.page==="forgot"?forgot():auth(state.page);
else app.innerHTML=dashboardShell();
window.scrollTo(0,0);
}
render();
