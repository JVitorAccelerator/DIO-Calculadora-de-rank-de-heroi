def ranked_points(wins, losses):
    points = wins - losses
    return points

lista = [
    "Ferro", "Ferro", "Ferro", "Ferro", "Ferro",
    "Ferro", "Ferro", "Ferro", "Ferro", "Ferro", 
    "Bronze", "Bronze", "Bronze", "Bronze", "Bronze",
    "Bronze", "Bronze", "Bronze", "Bronze", "Bronze",
    "Prata", "Prata", "Prata", "Prata", "Prata", 
    "Prata", "Prata", "Prata", "Prata", "Prata",
    "Prata", "Prata", "Prata", "Prata", "Prata",
    "Prata", "Prata", "Prata", "Prata", "Prata",
    "Prata", "Prata", "Prata", "Prata", "Prata",
    "Prata", "Prata", "Prata", "Prata", "Prata",
    "Ouro", "Ouro", "Ouro", "Ouro", "Ouro", 
    "Ouro", "Ouro", "Ouro", "Ouro", "Ouro",
    "Ouro", "Ouro", "Ouro", "Ouro", "Ouro",
    "Ouro", "Ouro", "Ouro", "Ouro", "Ouro",
    "Ouro", "Ouro", "Ouro", "Ouro", "Ouro",
    "Ouro", "Ouro", "Ouro", "Ouro", "Ouro",
    "Diamante", "Diamante", "Diamante", "Diamante",
    "Diamante", "Diamante", "Diamante", "Diamante",
    "Diamante", "Diamante",
    "Lendário", "Lendário", "Lendário", "Lendário",
    "Lendário", "Lendário", "Lendário", "Lendário",
    "Lendário", "Lendário"
]

continue_program = True
while continue_program:
    continuar = input('Digite qualquer tecla para continuar ou 0 para sair: ')
    if continuar == '0':
        continue_program = False
    else:
        wins = int(input('Digite o número de vitórias: '))
        losses = int(input('Digite o número de derrotas: '))
        points = ranked_points(wins, losses)
        
        if points <=0:
            points = 0
            rank = "Ferro"
        elif points >= 101:
            rank = "Imortal"
        else:
            rank = lista[points - 1]  
        
        
        print(f"O Herói tem de saldo de {points} está no nível de {rank}")



