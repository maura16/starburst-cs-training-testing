# Starburst CS Training
This [design doc](https://www.freecodecamp.org/news/how-to-write-a-good-software-design-document-66fcf019569c/)
is intended to provide a summary of patterns and conventions used in the project.
It should provide a quick way to jump into content creation.
We expect a lot of initial refactoring so all discussion is welcome.
If an alternative pattern is discovered, add it in the Discussion section.
Cons and pros will be evaluated in a team discussion.

## Project structure
- Competencies are to be divided into folders.
- Hierarchy is `competency/sub-competency/exercise`.
- A single exercise is standalone.

## Validation
- Exercise contains `validate.sh` script that informs of exercise completion.
- Validation should be lightweight and focus on checking the contents of output file.
- `collect.sh` script can be provided for the user to gather all the required output files. 

## Tools
- `Markdown` for text - it's easy to view in github.
- [BATS - Bash Automated Testing System](https://github.com/bats-core/bats-core) for exercise validation.

## Naming conventions
- Use number prefix to preserve order.
- Use lowercase, hyphens - see [filename convention guidelines](https://developers.google.com/style/filenames).
- `validate.sh` for validation.
- In the exercise `solution` folder is used for expected user code and output.

# Discussion
Please post below any encountered patterns, problems, notes or comments for the team discussion in the format:  
`- [Name] - Problem description.`
