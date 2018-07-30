# Rails Auth

Here's a checklist for things you wanna make sure you are doing to implement auth:

- User Creation
  - [ ] Made sure to create a `users` table with a column called `password_digest`
  - [ ] Include `bcrypt` as a gem in the `Gemfile`
  - [ ] When creating a user, make sure you are passing password and password_confirmation, to keep it secure
  - [ ] Make sure you have the routes for `/users`
- User Log in
  - [ ] SessionsController with `new` and `create` actions; handles logging in
  - [ ] When `sessions#create`, we wanna make sure that we set `sessions[:user_id] = @user.id`
  - [ ] Remember in our routes file to have the `login_path`, `sessions_path` routes
  - [ ] In our ApplicationController we want a way to see the current user and logged_in?
  - [ ] If there are any actions we want to hide (like must be authorized), use the `before_action`
- User Log out
  - [ ] When a user wants to log out they need the `sessions#destroy` action.
  - [ ] Have some place where they can hit that action and redirect them to the login_path
