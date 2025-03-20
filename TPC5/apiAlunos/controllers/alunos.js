var Aluno = require('../models/aluno')

module.exports.list = () => {
    return Aluno.find()
                .sort({nome: 1})
                .exec()   
}


module.exports.findById = id => {
    return Aluno.findOne({_id: id})
                .exec()   
}

module.exports.insert = aluno => {
    if (Aluno.find({_id : aluno.id}).exec.lenght != 1) {
        var newAluno = new Aluno(aluno)
        newAluno._id = aluno.id
        return newAluno.save()
    }
}

module.exports.update = (id, aluno) => {
    return Aluno
        .findOneAndReplace({ _id: id }, aluno, { new: true })
        .exec();
}


module.exports.delete = id => {
    return Aluno.findByIdAndDelete(id);
}

module.exports.inverteTpc = (id,idTpc) => {
    return Aluno
            .findOne(id)
            .exec()
            .then( aluno => {
                var tpc = `tpc${idTpc}`
                if (aluno[tpc]) {
                    aluno[tpc] = !aluno[tpc]
                }
                else {
                    aluno[tpc] = true
                }
                Aluno
                    .findByIdAndUpdate(id,aluno)
                    .exec()

                return Aluno.findById(id).exec()
            })
}