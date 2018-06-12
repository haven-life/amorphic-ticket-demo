var ticketRoutes = {
    enter: function (route) {
        this.page = route.route;
        this.file = route.file;
        this.pageInit();
    },
    routes: {
        public: {
            path: '',
            routes: {
                default: {path: '', file: null},
                home: {file: null},

                login: {file: "login.html"},
                registration: {file: "registration.html"},
                registration_instructions: {file: "registration_instructions.html"},
                registration_confirmation: {file: "registration_confirmation.html"},

                change_email: {file: "change_email.html"},
                change_email_confirmation: {file: "change_email_confirmation.html"},
                change_password: {file: "change_password.html"},
                change_password_confirmation: {file: "change_password_confirmation.html"},

                reset_password_request: {file: "reset_password_request.html"},
                reset_password_instructions: {file: "reset_password_instructions.html"},
                reset_password: {file: "reset_password.html"},
                reset_password_confirmation: {file: "reset_password_confirmation.html"},

                reset_password_from_code: {
                    file: "reset_password.html",
                    parameters: {
                        email: {bind: "email"},
                        token: {bind: "passwordChangeHash"}
                    }
                },
                verify_email: {
                    file: '',
                    parameters: {
                        email: {bind: "email"},
                        code: {bind: "verifyEmailCode"}
                    },
                    enter: function () {
                        this.publicVerifyEmailFromCode('registration_confirmation');
                    }
                },
                init_all: {enter: function () {controller.publicInitAll()}}
            }
        },
        private: {
            path: '',
            enter: function (route) {
                if (!this.loggedIn)
                    this.router.goTo('');
            },
            routes: {
                people: {file: "people.html"},
                tickets: {file: "tickets.html"},
                ticket: {file: "ticket.html"},
                projects: {file: "projects.html"},
                project: {file: "project.html"},
                delete_all: {enter: function () {controller.deleteAll()}}
            }
        }
    }
};


