NAME ?= $(shell bash -c 'read -p "Name: " pwd; slugify $$pwd')

new: 
	hugo new recipes/$(NAME)/index.md