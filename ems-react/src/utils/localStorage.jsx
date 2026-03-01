const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare weekly report",
        description: "Create and submit the weekly progress report.",
        date: "2026-03-01",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update client data",
        description: "Update CRM records with latest client info.",
        date: "2026-02-25",
        category: "Data Entry"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Fix dashboard bug",
        description: "Resolve chart loading issue in analytics dashboard.",
        date: "2026-02-20",
        category: "Development"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design login page",
        description: "Create responsive UI for login screen.",
        date: "2026-03-02",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Team meeting",
        description: "Attend sprint planning meeting.",
        date: "2026-03-03",
        category: "Meeting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Refactor CSS",
        description: "Clean and organize styling files.",
        date: "2026-02-24",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "API integration",
        description: "Integrate user authentication API.",
        date: "2026-02-22",
        category: "Backend"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Write unit tests",
        description: "Add tests for employee module.",
        date: "2026-03-04",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Optimize queries",
        description: "Improve DB query performance.",
        date: "2026-02-26",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Bug review",
        description: "Review and verify reported issues.",
        date: "2026-02-23",
        category: "QA"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Implement pagination",
        description: "Add pagination to employee list.",
        date: "2026-03-05",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Deploy staging build",
        description: "Deploy latest build to staging server.",
        date: "2026-02-21",
        category: "Deployment"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create API docs",
        description: "Write documentation for new endpoints.",
        date: "2026-03-06",
        category: "Documentation"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Code review",
        description: "Review pull requests from team members.",
        date: "2026-03-02",
        category: "Review"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix UI alignment",
        description: "Correct layout issue on dashboard.",
        date: "2026-02-27",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Email automation",
        description: "Set up automated notification emails.",
        date: "2026-02-20",
        category: "Automation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Accessibility check",
        description: "Ensure UI meets accessibility standards.",
        date: "2026-02-18",
        category: "QA"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Feature planning",
        description: "Plan features for next sprint.",
        date: "2026-03-07",
        category: "Planning"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Setup analytics",
        description: "Integrate analytics tracking system.",
        date: "2026-03-03",
        category: "Analytics"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Performance audit",
        description: "Analyze app performance issues.",
        date: "2026-02-25",
        category: "Optimization"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Security review",
        description: "Check authentication security flow.",
        date: "2026-03-08",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Payment integration",
        description: "Integrate payment gateway APIs.",
        date: "2026-02-19",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update dependencies",
        description: "Upgrade project packages to latest version.",
        date: "2026-02-22",
        category: "Maintenance"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Create onboarding guide",
        description: "Write onboarding steps for new developers.",
        date: "2026-03-09",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Backup database",
        description: "Run and verify DB backup process.",
        date: "2026-02-17",
        category: "Database"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage=()=>
{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage=()=>
{
    const employees=localStorage.getItem('employees')
    console.log(JSON.parse(employees))
    const admin=localStorage.getItem('admin')
    console.log(JSON.parse(admin))

}