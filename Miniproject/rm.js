const careerRoadmaps = {
    "ai-ml": {
      salary: "₹8,00,000 - ₹30,00,000",
      duration: "12-24 months",
      phases: [
        {
          title: "Mathematics & Programming Foundation (3-5 months)",
          skills: [
            {
              category: "Core Mathematics",
              icon: "fa-square-root-variable",
              level: "Intermediate",
              items: [
                "Linear Algebra (Vectors, Matrices, Eigen decomposition)",
                "Probability (Distributions, Bayesian Inference)",
                "Multivariable Calculus (Gradients, Optimization)",
                "Statistical Methods (Hypothesis testing, Regression)"
              ],
              subskills: [
                "Implement ML algorithms from scratch using NumPy",
                "Solve 100+ problems on Probability/Statistics",
                "Derive and implement backpropagation manually"
              ],
              milestones: [
                {
                  title: "Math for ML Project",
                  icon: "fa-calculator",
                  description: "Implement gradient descent for linear regression from scratch with visualization"
                }
              ],
              certifications: [
                "MITx - Mathematics for Machine Learning",
                "Imperial College London - Mathematics for ML"
              ],
              resources: [
                { name: "3Blue1Brown Linear Algebra", url: "https://www.3blue1brown.com/topics/linear-algebra" },
                { name: "StatQuest YouTube Channel", url: "https://www.youtube.com/c/StatQuest" }
              ]
            },
            {
              category: "Python for ML",
              icon: "fa-python",
              level: "Advanced",
              items: [
                "NumPy (Vectorized operations, Broadcasting)",
                "Pandas (Data wrangling, Time series)",
                "Matplotlib/Seaborn (Visualization)",
                "Object-Oriented Programming"
              ],
              subskills: [
                "Optimize Python code with NumPy vectorization",
                "Build custom data preprocessing pipelines",
                "Create interactive visualizations"
              ],
              milestones: [
                {
                  title: "Data Analysis Project",
                  icon: "fa-chart-line",
                  description: "Complete end-to-end analysis of a real-world dataset with visualizations"
                }
              ],
              resources: [
                { name: "Python Data Science Handbook", url: "https://jakevdp.github.io/PythonDataScienceHandbook/" },
                { name: "Real Python Tutorials", url: "https://realpython.com/" }
              ]
            }
          ]
        },
        {
          title: "Machine Learning Core (4-6 months)",
          skills: [
            {
              category: "Supervised Learning",
              icon: "fa-robot",
              level: "Advanced",
              items: [
                "Linear/Logistic Regression",
                "Decision Trees & Ensemble Methods",
                "SVM & Kernel Methods",
                "Model Evaluation Metrics"
              ],
              subskills: [
                "Implement algorithms from scratch",
                "Hyperparameter tuning with GridSearch",
                "Feature engineering techniques"
              ],
              milestones: [
                {
                  title: "Kaggle Competition",
                  icon: "fa-trophy",
                  description: "Participate in at least 2 Kaggle competitions with top 20% score"
                }
              ],
              certifications: [
                "Andrew Ng - Machine Learning (Coursera)",
                "AWS Certified Machine Learning Specialty"
              ],
              resources: [
                { name: "Hands-On Machine Learning", url: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/" },
                { name: "Scikit-learn Documentation", url: "https://scikit-learn.org/stable/" }
              ]
            }
          ]
        }
      ]
    },
    "web-dev": {
      salary: "₹4,00,000 - ₹20,00,000",
      duration: "8-18 months",
      phases: [
        {
          title: "Frontend Mastery (4-6 months)",
          skills: [
            {
              category: "Modern JavaScript",
              icon: "fa-js",
              level: "Advanced",
              items: [
                "ES6+ Features (Modules, Classes)",
                "Asynchronous JS (Promises, Async/Await)",
                "Functional Programming Concepts",
                "DOM Manipulation & Events"
              ],
              subskills: [
                "Build 20+ interactive UI components",
                "Implement complex state management",
                "Optimize bundle size using Webpack"
              ],
              milestones: [
                {
                  title: "E-commerce Frontend",
                  icon: "fa-cart-shopping",
                  description: "Build a responsive product catalog with cart functionality using vanilla JS"
                }
              ],
              certifications: [
                "FreeCodeCamp Frontend Certification",
                "Microsoft Frontend Developer Associate"
              ],
              resources: [
                { name: "JavaScript.info", url: "https://javascript.info/" },
                { name: "Frontend Mentor Challenges", url: "https://www.frontendmentor.io/" }
              ]
            },
            {
              category: "React Ecosystem",
              icon: "fa-react",
              level: "Professional",
              items: [
                "React Hooks & Context API",
                "State Management (Redux/Zustand)",
                "Next.js Framework",
                "Testing (Jest, React Testing Library)"
              ],
              subskills: [
                "Build reusable component libraries",
                "Implement server-side rendering",
                "Optimize performance with memoization"
              ],
              milestones: [
                {
                  title: "Fullstack Social Media App",
                  icon: "fa-users",
                  description: "Create a Twitter clone with authentication and real-time updates"
                }
              ],
              resources: [
                { name: "React Documentation", url: "https://reactjs.org/docs/getting-started.html" },
                { name: "Epic React", url: "https://epicreact.dev/" }
              ]
            }
          ]
        },
        {
          title: "Backend Development (4-5 months)",
          skills: [
            {
              category: "Node.js & Express",
              icon: "fa-server",
              level: "Intermediate",
              items: [
                "RESTful API Design",
                "Authentication (JWT, OAuth)",
                "Error Handling & Logging",
                "Performance Optimization"
              ],
              subskills: [
                "Implement rate limiting",
                "Build middleware stacks",
                "WebSocket integration"
              ],
              milestones: [
                {
                  title: "E-commerce API",
                  icon: "fa-store",
                  description: "Develop complete REST API for online store with user roles"
                }
              ],
              certifications: [
                "Node.js Services Developer (IBM)"
              ],
              resources: [
                { name: "Node.js Best Practices", url: "https://github.com/goldbergyoni/nodebestpractices" },
                { name: "Express Documentation", url: "https://expressjs.com/" }
              ]
            }
          ]
        }
      ]
    },
    "cloud-computing": {
      salary: "₹7,00,000 - ₹25,00,000",
      duration: "9-18 months",
      phases: [
        {
          title: "Cloud Fundamentals (3-4 months)",
          skills: [
            {
              category: "AWS Core Services",
              icon: "fa-aws",
              level: "Associate",
              items: [
                "EC2 (Instance types, AMIs, Auto Scaling)",
                "S3 (Storage classes, Lifecycle policies)",
                "VPC (Subnets, NACLs, Security Groups)",
                "IAM (Roles, Policies, MFA)"
              ],
              subskills: [
                "Design 3-tier architecture",
                "Implement cost optimization strategies",
                "Set up cross-region replication"
              ],
              milestones: [
                {
                  title: "Highly Available Web App",
                  icon: "fa-server",
                  description: "Deploy fault-tolerant application across multiple AZs"
                }
              ],
              certifications: [
                "AWS Cloud Practitioner",
                "AWS Solutions Architect Associate"
              ],
              resources: [
                { name: "AWS Well-Architected Framework", url: "https://aws.amazon.com/architecture/well-architected/" },
                { name: "AWS Workshops", url: "https://workshops.aws/" }
              ]
            }
          ]
        },
        {
          title: "Advanced Cloud (6-8 months)",
          skills: [
            {
              category: "Serverless Architecture",
              icon: "fa-bolt",
              level: "Professional",
              items: [
                "AWS Lambda (Python/Node.js)",
                "API Gateway (REST/WebSocket)",
                "DynamoDB (Single-table design)",
                "Event Bridge (Event-driven patterns)"
              ],
              subskills: [
                "Implement CI/CD pipelines",
                "Design event-driven architectures",
                "Optimize cold start times"
              ],
              milestones: [
                {
                  title: "Serverless Microservices",
                  icon: "fa-microchip",
                  description: "Build scalable notification service with SQS and Lambda"
                }
              ],
              certifications: [
                "AWS Developer Associate",
                "AWS DevOps Professional"
              ],
              resources: [
                { name: "Serverless Framework", url: "https://www.serverless.com/" },
                { name: "AWS Serverless Airline Booking", url: "https://github.com/aws-samples/aws-serverless-airline-booking" }
              ]
            }
          ]
        }
      ]
    },
    "data-science": {
      salary: "₹6,00,000 - ₹22,00,000",
      duration: "10-18 months",
      phases: [
        {
          title: "Data Wrangling (3-4 months)",
          skills: [
            {
              category: "SQL Mastery",
              icon: "fa-database",
              level: "Advanced",
              items: [
                "Complex Joins & Subqueries",
                "Window Functions",
                "Query Optimization",
                "ETL Pipelines"
              ],
              subskills: [
                "Write production-grade SQL",
                "Optimize query performance",
                "Design star schemas"
              ],
              milestones: [
                {
                  title: "Data Warehouse Project",
                  icon: "fa-warehouse",
                  description: "Design and implement a dimensional data warehouse"
                }
              ],
              certifications: [
                "Google Data Analytics Professional"
              ],
              resources: [
                { name: "SQLZoo", url: "https://sqlzoo.net/" },
                { name: "Use The Index Luke", url: "https://use-the-index-luke.com/" }
              ]
            }
          ]
        }
      ]
    },
    "cybersecurity": {
      salary: "₹5,00,000 - ₹20,00,000",
      duration: "12-24 months",
      phases: [
        {
          title: "Penetration Testing (6-8 months)",
          skills: [
            {
              category: "Web App Security",
              icon: "fa-shield-halved",
              level: "Advanced",
              items: [
                "OWASP Top 10 Vulnerabilities",
                "Burp Suite Professional",
                "Authentication Bypass Techniques",
                "API Security Testing"
              ],
              subskills: [
                "Perform full pentests",
                "Write comprehensive reports",
                "Remediation guidance"
              ],
              milestones: [
                {
                  title: "Bug Bounty Hunter",
                  icon: "fa-bug",
                  description: "Find and report valid vulnerabilities on bug bounty platforms"
                }
              ],
              certifications: [
                "OSCP (Offensive Security Certified Professional)",
                "CEH (Certified Ethical Hacker)"
              ],
              resources: [
                { name: "Hack The Box", url: "https://www.hackthebox.com/" },
                { name: "PortSwigger Web Security Academy", url: "https://portswigger.net/web-security" }
              ]
            }
          ]
        }
      ]
    },
    "devops": {
      salary: "₹8,00,000 - ₹25,00,000",
      duration: "9-18 months",
      phases: [
        {
          title: "CI/CD Automation (4-5 months)",
          skills: [
            {
              category: "GitHub Actions",
              icon: "fa-github",
              level: "Advanced",
              items: [
                "Workflow Design",
                "Self-Hosted Runners",
                "Secret Management",
                "Matrix Strategies"
              ],
              subskills: [
                "Implement multi-stage pipelines",
                "Create custom actions",
                "Optimize workflow duration"
              ],
              milestones: [
                {
                  title: "End-to-End Pipeline",
                  icon: "fa-gears",
                  description: "Build CI/CD pipeline with testing, security scanning, and deployment"
                }
              ],
              certifications: [
                "GitHub Actions Certification"
              ],
              resources: [
                { name: "GitHub Docs", url: "https://docs.github.com/en/actions" },
                { name: "Awesome Actions", url: "https://github.com/sdras/awesome-actions" }
              ]
            }
          ]
        }
      ]
    }
  };
  
  document.getElementById('career-select').addEventListener('change', (e) => {
    const career = e.target.value;
    const roadmap = careerRoadmaps[career];
    
    if (!roadmap) {
      document.getElementById('roadmap').innerHTML = `
        <div class="empty-state">
          <i class="fas fa-exclamation-triangle"></i>
          <p>Roadmap not available for this career</p>
        </div>
      `;
      return;
    }
    
    document.getElementById('salary').textContent = roadmap.salary;
    document.getElementById('duration').textContent = roadmap.duration;
    
    const container = document.getElementById('roadmap');
    container.innerHTML = '';
    
    const roadmapElement = document.createElement('div');
    roadmapElement.className = 'roadmap';
    
    roadmapElement.innerHTML = `
      <div class="progress-tracker">
        <div class="progress-header">
          <h3>Your Progress</h3>
          <span>0% Complete</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: 0%"></div>
        </div>
        <div class="progress-stats">
          <span>0/${roadmap.phases.length} Phases</span>
          <span>0 Skills</span>
        </div>
      </div>
    `;
    
    roadmap.phases.forEach((phase, index) => {
      const phaseElement = document.createElement('div');
      phaseElement.className = 'phase';
      
      const skillsHTML = phase.skills.map(skill => `
        <div class="skill-card">
          <span class="skill-level">${skill.level}</span>
          <h3 class="skill-category"><i class="fas ${skill.icon}"></i> ${skill.category}</h3>
          <ul class="skill-list">
            ${skill.items.map(item => `<li class="skill-item">${item}</li>`).join('')}
          </ul>
          
          ${skill.subskills ? `
            <div class="sub-skills">
              ${skill.subskills.map(sub => `<div class="sub-skill">${sub}</div>`).join('')}
            </div>
          ` : ''}
          
          ${skill.milestones ? `
            <div class="milestones">
              ${skill.milestones.map(m => `
                <div class="milestone">
                  <h4><i class="fas ${m.icon}"></i> ${m.title}</h4>
                  <p>${m.description}</p>
                </div>
              `).join('')}
            </div>
          ` : ''}
          
          ${skill.certifications ? `
            <div class="certifications">
              ${skill.certifications.map(c => `
                <span class="cert-badge">${c}</span>
              `).join('')}
            </div>
          ` : ''}
          
          <div class="resources">
            ${skill.resources.map(r => `
              <a href="${r.url}" class="resource-link" target="_blank">${r.name}</a>
            `).join('')}
          </div>
        </div>
      `).join('');
      
      phaseElement.innerHTML = `
        <div class="phase-header">
          <div class="phase-number">${index + 1}</div>
          <h2 class="phase-title">${phase.title}</h2>
        </div>
        <div class="skill-tree">
          ${skillsHTML}
        </div>
      `;
      
      roadmapElement.appendChild(phaseElement);
    });
    
    container.appendChild(roadmapElement);
  });