# Building cv and updating site's file.

./public-cv/public-cv.pdf: ./public-cv/public-cv.tex
	pdflatex -output-directory public-cv public-cv/public-cv.tex
	cp public-cv/public-cv.pdf src/public-cv.pdf

