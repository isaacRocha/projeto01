const conn = require('../config/conexao')

class QuestionController {
    static getQuestions(req, res) {
        let sql = 'select * from pergunta';
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

    static getQuestion(req, res) {
        let sql = `select * from pergunta where idPergunta = ${req.params.id}`
        conn.query(sql, (err, rows) => {
            if (err) {
                res.status(422).json(err)
            } else {
                res.status(200).json(rows.rows);
            }
        })
    }


    
    static async registerQuestion(req, res) {
        const { idQuiz, pergunta, ajuda, status, avaliaca } = req.body

        /*    
    idQuiz,
    pergunta,
    correta,
    errada1,
    errada2,
    errada3,
    ajuda,
    status,
    avaliacao
        */

        let sql = `insert into
                            pergunta(
                                idQuiz,
    							pergunta,
    							ajuda,
    							status,
    							avaliacao
                          )
                            values( 
                                '${idQuiz}',
                                '${pergunta}',
                                '${ajuda}',
                                '${status}',
                                '${avaliaca}'
                            )`;

        conn.query(sql, (err, rows) => {
            if (err) {
                res.status(422).json(err);
            } else {
                res.status(200).json({ status: 'cadastro feito' })
            }
        })
    }

    static deleteQuestion(req, res) {
        let sql = `delete from pergunta where idPergunta = ${req.params.id}`;
        conn.query(sql, (err, rows) => {
            if (err) {
                res.status(422).json(err);
            } else {
                res.status(200).json({ status: 'Pergunta deletada' })
            }
        })
    }

    static async editQuestion(req, res) {
        const { id } = req.params;
        const { idQuiz, pergunta, ajuda, status, avaliaca } = req.body


        let sql = `update pergunta set
                        idQuiz = '${idQuiz}',
                        pergunta = '${pergunta}',
                        ajuda = '${ajuda}',
                        status = '${status}',
                        avaliacao = '${avaliaca}'
                    where 
                        idPergunta = '${id}'`

        conn.query(sql, (err, rows) => {
            if (err) {
                res.status(422).json({
                    messege: err
                });
            } else {
                res.status(200).json({ status: 'Pergunta alterada'})
            }
        })
    }


}

module.exports = QuestionController