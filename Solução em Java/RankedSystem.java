import java.util.Scanner;

 class RankedSystem {

    public static int ranked(int wins, int losses) {
        return wins - losses;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        boolean continuarPrograma = true;

        while (continuarPrograma) {
            System.out.print("Digite 0 para sair ou digite 1 para continuar: ");
            String continuar = scanner.nextLine();

            if (continuar.equals("0")) {
                continuarPrograma = false;
                System.out.println("Programa encerrado.");
            } else {
                System.out.print("Digite o número de vitórias: ");
                int wins = Integer.parseInt(scanner.nextLine());

                System.out.print("Digite o número de derrotas: ");
                int losses = Integer.parseInt(scanner.nextLine());

                int rankedPoints = ranked(wins, losses);
                String rank;

                if (rankedPoints >= 11 && rankedPoints <= 20) {
                    rank = "Bronze";
                } else if (rankedPoints >= 21 && rankedPoints <= 50) {
                    rank = "Prata";
                } else if (rankedPoints >= 51 && rankedPoints <= 80) {
                    rank = "Ouro";
                } else if (rankedPoints >= 81 && rankedPoints <= 90) {
                    rank = "Diamante";
                } else if (rankedPoints >= 91 && rankedPoints <= 100) {
                    rank = "Lendário";
                } else if (rankedPoints >= 101) {
                    rank = "Imortal";
                } else {
                    rank = "Ferro";
                }

                System.out.println("O Herói tem saldo de " + rankedPoints + " e está no nível de " + rank);
            }
        }

        scanner.close();
    }
}
