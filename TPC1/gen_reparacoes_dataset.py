import random
import json

def open_json(filename):
    with open(filename, 'r', encoding='utf-8') as file:
        return json.load(file)
    
def save_json(filename, content):
    with open(filename, 'w', encoding='utf-8') as file:
        json.dump(content, file, indent=4, ensure_ascii=False)

def process_reparacoes(json_obj):
    reparacoes = []
    intervencoes_set = {}
    viaturas_set = {}
    
    r1 = random.randint(3214, 21141)
    r3 = random.randint(3214, 21141)
    
    for reparacao in json_obj['reparacoes']:
        rep = {
            'id': r1,
            'nome': reparacao['nome'],
            'nif': reparacao['nif'],
            'data': reparacao['data'],
            'viatura': reparacao['viatura'],
            'nr_intervencoes': reparacao['nr_intervencoes'],
            'intervencoes': reparacao['intervencoes']
        }
        
        viatura_key = (reparacao['viatura']['marca'], reparacao['viatura']['modelo'])
        if viatura_key not in viaturas_set:
            viaturas_set[viatura_key] = {
                'id': r3,
                'marca': reparacao['viatura']['marca'],
                'modelo': reparacao['viatura']['modelo']
            }
            r3 += 1
        
        for interv in reparacao['intervencoes']:
            intervencoes_set[interv['codigo']] = {
                'id': interv['codigo'],
                'nome': interv['nome'],
                'descricao': interv['descricao']
            }
        
        reparacoes.append(rep)
        r1 += 1
    
    return reparacoes, sorted(intervencoes_set.values(), key=lambda x: x['id']), list(viaturas_set.values())

if __name__ == "__main__":
    json_obj = open_json('dataset_reparacoes.json')
    reparacoes, intervencoes, viaturas = process_reparacoes(json_obj)
    
    final_data = {
        'reparacoes': reparacoes,
        'intervencoes': intervencoes,
        'viaturas': viaturas
    }
    
    save_json('dataset_format.json', final_data)
