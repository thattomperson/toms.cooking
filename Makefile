NAME ?= $(shell bash -c 'read -p "Name: " pwd; slugify $$pwd')

new:
	FILE="recipes/$(NAME)/index.md"; \
	hugo new $$FILE; \
	code content/$$FILE;