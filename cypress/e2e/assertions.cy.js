/// <reference types="cypress" />

describe("Name field tests", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("button.hero-descriptor_btn.btn.btn-primary").click();
    cy.get(".modal-content").should("be.visible");
  });

  it("Empty field", () => {
    cy.get("#signupName").should("have.value", "");
  });

  it("Valid name", () => {
    const validName = "Иван";
    cy.get("#signupName").clear().type(validName);
    cy.get("#signupName").should("have.value", validName);
  });

  it("Name required", () => {
    cy.get("#signupName").focus().blur();
    cy.get(".invalid-feedback").should("have.text", "Name required");
  });

  it("validate short length", () => {
    cy.get("#signupName").clear().type("A").blur();
  });
  it("validate long length", () => {
    const longName = "A".repeat(101);
    cy.get("#signupName").clear().type(longName).blur();
    cy.get("#signupName").should("have.class", "is-invalid");
  });

  it("border color red", () => {
    cy.get("#signupName").focus().blur();
    cy.get(".form-control.is-invalid").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
  });
});

describe("Last name field tests", () => {
  beforeEach(() => {
    cy.visit("/");
        cy.get("button.hero-descriptor_btn.btn.btn-primary").click();
    cy.get(".modal-content").should("be.visible");
  });

  it("Empty field", () => {
    cy.get("#signupLastName").should("have.value", "");
  });

  it.only("Valid Last name", () => {
    const validLastName = "Петров";
     cy.get("#signupLastName").focus().blur();
    cy.get("#signupLastName").clear().type(validLastName);
    cy.get("#signupLastName").should("have.value", validLastName);
  });

  it("Last name required", () => {
    cy.get("#signupLastName").clear().focus();
    cy.get(".invalid-feedback").should("contain.text", "Last name required");
  });

  it("validate short length", () => {
    cy.get("#signupLastName").clear().type("A").blur();
  });

  it("validate long length", () => {
    const longLastName = "A".repeat(101);
    cy.get("#signupLastName").clear().type(longLastName).blur();
    cy.get("#signupLastName").should("have.class", "is-invalid");
  });
  it("border color red", () => {
    cy.get("#signupLastName").focus().blur();
    cy.get(".form-control.is-invalid").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
  });
});

describe("Email field tests", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("button.hero-descriptor_btn.btn.btn-primary").click();
    cy.get(".modal-content").should("be.visible");
  });

  it("Empty field", () => {
    cy.get("#signupEmail").should("have.value", "");
  });

  it("Email is incorrect", () => {
    cy.get("#signupEmail").type("invalid-email");
    cy.get("#signupEmail").blur();
    cy.get("#signupEmail").should("have.class", "is-invalid");
  });

  it("Valid email", () => {
    cy.get("#signupEmail").clear().type("test@example.com");
    cy.get("#signupEmail").blur();
    cy.get("#signupEmail").should("not.have.class", "is-invalid");
  });

  it("border color red", () => {
    cy.get("#signupLastName").focus().blur();
    cy.get(".form-control.is-invalid").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
  });
});
describe("Password field tests", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("button.hero-descriptor_btn.btn.btn-primary").click();
    cy.get(".modal-content").should("be.visible");
  });

  it("Focus", () => {
    cy.get("#signupPassword").should("have.value", "");
  });

  it("Password is incorrect", () => {
    cy.get("#signupPassword").type("invalid-password");
    cy.get("#signupPassword").blur();
    cy.get("#signupPassword").should("have.class", "is-invalid");
  });
  it("border color red", () => {
    cy.get("#signupPassword").focus().blur();
    cy.get(".form-control.is-invalid").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
  });
});

describe("Re-enter Password field tests", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("button.hero-descriptor_btn.btn.btn-primary").click();
    cy.get(".modal-content").should("be.visible");
      });

it.only('Missing integer', () => {
    const passwordField = '#signupPassword';
    
    const passwordsWithoutInteger = [
      'Password',
      'TestPass',
      'MyPassword',
      'HelloWorld'
    ];

    passwordsWithoutInteger.forEach(password => {
      cy.get(passwordField).clear().type(password);
      
          cy.get('body').click();
    
      cy.get(passwordField).should('have.class', 'is-invalid');
    });
  });

  it("Focus", () => {
    cy.get('input[name="password"]').type("MyStrongPassword123");
    cy.get("#signupRepeatPassword").focus().blur();
    cy.get("#signupRepeatPassword").should("have.value", "");
  });

  it("border color red", () => {
    cy.get("#signupRepeatPassword").focus().blur();
    cy.get(".form-control.is-invalid").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
  });
  it("Password is incorrect", () => {
    cy.get("#signupRepeatPassword").type("invalid-email");
    cy.get("#signupRepeatPassword").blur();
    cy.get("#signupRepeatPassword").should("have.class", "is-invalid");
  });
});


