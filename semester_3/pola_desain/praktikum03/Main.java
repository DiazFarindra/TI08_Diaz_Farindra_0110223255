public class Main {
    public static void main(String[] args) {
        String string1 = new String("Hello");
        String string2 = new String("Hello");

        // Menggunakan ==
        if (string1 == string2) {
            System.out.println("string1 == string2: Sama");
        } else {
            System.out.println("string1 == string2: Tidak Sama");
        }

        // Menggunakan .equals()
        if (string1.equals(string2)) {
            System.out.println("string1.equals(string2): Sama");
        } else {
            System.out.println("string1.equals(string2): Tidak Sama");
        }
    }
}
