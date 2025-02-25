import json

def openJSON(file):
    with open(file, "r") as f:
        return json.load(f)

def writeJSON(file, data):
    with open(file, "w") as f:
        json.dump(data, f, indent=4,ensure_ascii=False)

def openCSV(file):
    with open(file, "r") as f:
        return f.readlines()

def main():
    dict_alunos = {}
    dict_alunos["alunos"] = []
    data = openCSV("alunos.csv")
    for aluno in data:
        reg_aluno = aluno.split(";")
        dict_alunos["alunos"].append({
            "id": reg_aluno[0],
            "nome": reg_aluno[1],
            "git": reg_aluno[2]
        })
    writeJSON("db.json", dict_alunos)


if __name__ == "__main__":
    main()