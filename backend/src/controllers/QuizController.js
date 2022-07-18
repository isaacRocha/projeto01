const conn = require('../config/conexao')

class QuizController {

    static getQuizzes(req, res) {
        let sql = 'select * from quiz';
        conn.query(sql, (err, rows) => {
            if (err) {
                res.status(422).json('err')
                return
            } else {
                res.status(200).json(rows.rows);
                return
            }
        });
    }

    static getQuiz(req, res) {
        let sql = `select * from quiz where idQuiz = ${req.params.id}`
        conn.query(sql, (err, rows) => {
            if (err) {
                res.status(422).json(err)
            } else {
                res.status(200).json(rows.rows);
            }
        })
    }

    static async registerQuiz(req, res) {
        const { idAutor, idCategoria, idUsuario, obra, titulo, status, descricao } = req.body
		
        /*
		idQuiz, 
        idAutor,
        idCategoria,
        idUsuario, 
        obra, 
        titulo, 
        status, 
        descricao 
        */

        // validations
        if (!obra) {
            res.status(422).json({ message: 'O obra é obrigatório!' })
            return
        }

        if (!titulo) {
            res.status(422).json({ message: 'O titulo é obrigatório!' })
            return
        }

        if (!status) {
            res.status(422).json({ message: 'O status de nascimento é obrigatório!' })
            return
        }

        if (!descricao) {
            res.status(422).json({ message: 'Um descricao é obrigatória!' })
            return
        }

     let sql = `insert into
                            quiz(
                                idAutor,
                                idCategoria,
                                idUsuario, 
                                obra, 
                                titulo, 
                                status, 
                                descricao 
                          )
                            values( 
                                '${idAutor}',
                                '${idCategoria}',
                                '${idUsuario}',
                                '${obra}',
                                '${titulo}',
                                '${status}',
                                '${descricao}'
                            )`;

        conn.query(sql, (err, rows) => {
            if (err) {
                res.status(422).json(err);
            } else {
                res.status(200).json({ status: 'cadastro feito' })
            }
        })
    }

    static deleteQuiz(req, res) {
        let sql = `delete from quiz where idQuiz = ${req.params.id}`;
        conn.query(sql, (err, rows) => {
            if (err) {
                res.status(422).json(err);
            } else {
                res.status(200).json({ status: 'Quiz deletado' })
            }
        })
    }

    static async editQuiz(req, res) {
        const { id } = req.params;
        const { idAutor, idCategoria, idUsuario, obra, titulo, status, descricao } = req.body


        let sql = `update usuario set
                idAutor = '${idAutor}',
                idCategoria = '${idCategoria}',
                idUsuario = '${idUsuario}',
                obra = '${obra}',
                titulo = '${titulo}',
                status = '${status}',
                perfil = '${descricao}'
                where idQuiz = '${id}'`

        conn.query(sql, (err, rows) => {
            if (err) {
                res.status(422).json({
                    messege: err
                });
            } else {
                res.status(200).json({ status: 'Quiz alterado' })
            }
        })
    }

}

module.exports = QuizController;