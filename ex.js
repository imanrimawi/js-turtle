function main() {

    const height = getHeight() - 1;
    const width = getWidth() - 1;
    const length = Math.sqrt((height * height) + (width * width));
    penup();
    left(90);
    forward((width / 2));
    right(90);
    forward(height / 2);
    right(135);
    pendown();
    forward(length);
    penup()
    left(135);
    forward(height);
    left(135);
    pendown();
    forward(length);
    hideTurtle();
}
