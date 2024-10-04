public class Main {
    public static double calculate(double a, double b, double y) {
        return Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(y));
    }

    public static void main(String[] args) {
        // Example usage
        double a = 3;
        double b = 4;
        double y = Math.PI / 2; // 90 degrees in radians

        double c = calculate(a, b, y);

        System.out.println("nama: Farindra Diaz Ibrahim");
        System.out.println("NIM: 0110223255");
        System.out.println("rumus: Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(y))");
        System.out.println("input a: 3");
        System.out.println("input b: 4");
        System.out.println("input y: Math.PI / 2");
        System.out.println("result c: " + c);
    }
}
