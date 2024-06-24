# ICT2216 Secure Software Development - Implementation README

## Team P5 - Team 34

### Team Members

| Name | Student Number |
|------|----------------|
| Abdullah Waafi Bin Adam | 2201228 |
| Nik Mohammad Farhan bin Azmi | 2201237 |
| Tay Siang Long | 2203190 |
| Damian Ng Jun Jie | 2200664 |
| Lim Jun Wei | 2203465 |
| Casanas Joseph Christopher Cortes | 2202186 |
| Awil Alessandra Antoinette Javier | 2201905 |

---

## Project Overview

This project involves the development of an Animal Shelter Management System (ASMS) web application to facilitate operations such as adoptions, fostering, and volunteer work within animal shelters. Key functions include animal adoptions, donation processing, and volunteer management.

## Application Scope

The ASMS aims to streamline the processes of animal shelters, providing an efficient platform for managing adoptions, donations, and volunteer activities. The system ensures better outreach to potential pet adopters and donors, enhancing the overall effectiveness of shelter operations.

## Intended Audience and Stakeholders

The primary audience for this application includes:
- Pet Adoption Centers
- Shelter Staff and Administrators
- Potential Pet Adopters
- Donors

## Functional Requirements

- User authentication and authorization (login, logout, password reset).
- Pet adopters can register, view animals, submit adoption applications, and make donations.
- Staff can manage adoption applications, post animals for adoption, and track donations.
- Administrators can manage user roles and permissions.

## Non-functional Requirements

- Compatibility with modern web browsers (Safari, Firefox, Chrome, Opera, Brave).
- Responsive design for various devices (smartphones, tablets, laptops, desktops).
- Compliance with Web Content Accessibility Guidelines (WCAG).
- Page load times not exceeding 2 seconds under normal conditions.

## Security Requirements

### Confidentiality
- Encrypt user data and payment information.
- Utilize HTTPS for secure communication.

### Integrity
- Validate and sanitize user inputs.
- Prevent SQL injection and other code injection attacks.
- Implement secure cookies and session management.

### Availability
- Support up to 500 concurrent users without outages.
- Ensure 90% system uptime.
- Implement Web Application Firewall (WAF) and regular backups.

### Authentication
- Prevent brute-force attacks.
- Securely hash passwords with unique salts.
- Implement two-factor authentication (2FA).

### Authorization
- Use Role-Based Access Control (RBAC) for managing permissions.

### Accountability
- Log user activities, including login attempts, adoption transactions, and donations.

## Implementation Details

### Technologies Used

- **Frontend:** React.js
- **Backend:** Django
- **Database:** MySQL
- **Security:** HTTPS, WAF, secure cookies

### Setting Up the Development Environment

1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-repository.git
   ```

2. **Install Frontend Dependencies**
   ```sh
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```sh
   cd backend
   pip install -r requirements.txt
   ```

4. **Database Setup**
   - Ensure MySQL is installed and running.
   - Create a database named `asms`.
   - Run migrations:
     ```sh
     python manage.py migrate
     ```

5. **Run the Application**
   - **Frontend:**
     ```sh
     npm start
     ```
   - **Backend:**
     ```sh
     python manage.py runserver
     ```

## Contribution Guidelines

- Follow the coding standards outlined in the project's `CONTRIBUTING.md`.
- Ensure all changes are covered by tests.
- Submit pull requests for review before merging.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
