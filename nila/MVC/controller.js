// Controller: Handle user actions
function handleLogin(username, password) {
    // Validate login credentials
    // If valid, create User instance and fetch account data
    // Render account summary view
  }
  
  // Routing: Map routes to controller actions
  router.get('/login', (req, res) => {
    // Render login form view
  });
  
  router.post('/login', (req, res) => {
    const { username, password } = req.body;
    handleLogin(username, password);
  });
  
  // Usage:
  const user = new User('john_doe', 'password', 'John Doe');
  const account = new Account('1234567890', 'savings', 5000.00);
  const transaction = new Transaction('T001', '2023-07-01', -100.00, 'Withdrawal at ATM');
  
  renderAccountSummary(account);
  handleLogin('john_doe', 'password');