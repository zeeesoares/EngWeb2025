import json

def open_json(filename):
    with open(filename) as f:
        return json.load(f)
    
def save_json(filename, data):
    with open(filename, 'w') as f:
        json.dump(data, f, indent=4, ensure_ascii=False)    

def normalize_json(data):
    counter = 1
    for filme in data:
        filme['id'] = counter
        counter += 1
    
    dic = {}
    dic['filmes'] = data
    return dic

data = open_json('cinema.json')
data = normalize_json(data)
save_json('cinema.json', data)