# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here - Eduardo Kuwakino
- Requirement:
  > **Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**
- **User Story #100**: As a Facility user I want to include my own Agent id so that I can easily identify them on reports

## Task1: Include a custom id field on Agent registration
- User Story #100;

### Acceptance Criteria
Given the Agent registration form  
When a Facility user input a new custom id  
Then this id is persisted on database

Given the Agent registration form  
When a Facility user input an existent custom id  
Then a message to the user is returned informing: "Invalid Custom id.".

### Estimates: 7pt
- include property on model: 1pt;
- include field on form: 1pt;
- inlcude validation: 2pt;
- generate migrations: 1pt;
- unit tests: 1pt;
- integration tests: 1pt;

## Task2: Update Facilities reports to show custom Agent id as default
- User Story #100;
- Depends on: Ticket1;
- Custom id as default, database id if custom id is empty;

### Acceptance Criteria
Given a Facility report  
And the custom id set to all Agents  
When a Facility report is generated  
Then the report shows the custom id

Given a Facility report  
And the custom id not set to an Agent  
When a Facility report is generated  
Then the report shows the database id for that Agent

### Estimates: 5pt
- include custom id property on report: 1pt;
- include validation for custom id or database id: 2pt;
- unit tests: 1pt;
- integration tests: 1pt;
