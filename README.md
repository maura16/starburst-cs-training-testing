# starburst-cs-training

## Goals:
- Provide a modular framework for competency training
- Framework should be easily expandable by the whole team
- Modules should be easy to write and include in the project - just drop a folder approach
- Prerequisite knowledge for the modules should lie elsewhere, but can be linked in the exercise info
- Validation should be semi-automated, independently tracked on exercise completion and one-on-one in-person assessment
- Progess should be transparent and easily accessible

## User guide
- User will fork this repository to create his own copy, where he will commit all work
- User should add to their any repo any scripts, config files, etc. for proof of work
- It is on the user to set up a dedicated cluster, configure it and pull the information
- The final answer should be provided preferrably as text files commited to repo, the validation details should be in each exercise
- Expect the validation to be non-complete, but it should showcase the expected final solution

## Developer guidelines
- Exercises to be provided as markdown files
- Any additional required setup can be added as well, either directly or by refernce to the demo repository
- One can add a `collect.sh` script to automaticaly gather the output if obtaining it is complex
- Validation should be rather simple, definitely not extensive, preferrably just checking the output for a text


# Validation Testing
Install [Bats: Bash Automated Testing System](https://github.com/sstephenson/bats#installing-bats-from-source)
```
git clone https://github.com/sstephenson/bats.git
cd bats
sudo ./install.sh /usr/local
```
