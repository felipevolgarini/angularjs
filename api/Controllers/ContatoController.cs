using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ContatoController : ControllerBase
    {

        private static IList<Contato> lista;

        public ContatoController()
        {
            if (lista == null)
            {
                Contato contato1 = new Contato()
                {
                    nome = "Bruno",
                    telefone = "9999-2222",
                    data = DateTime.Now,
                    operadora = new Operadora()
                    {
                        nome = "Oi",
                        codigo = 14,
                        categoria = "Celular"
                    }
                };
                Contato contato2 = new Contato()
                {
                    nome = "Sandra",
                    telefone = "9999-3333",
                    data = DateTime.Now.AddDays(1),
                    operadora = new Operadora()
                    {
                        nome = "Vivo",
                        codigo = 15,
                        categoria = "Celular"
                    }
                };
                Contato contato3 = new Contato()
                {
                    nome = "Mariana",
                    telefone = "9999-9999",
                    data = DateTime.Now.AddDays(2),
                    operadora = new Operadora()
                    {
                        nome = "Tim",
                        codigo = 41,
                        categoria = "Celular"
                    }
                };
                lista = new List<Contato>();
                lista.Add(contato1);
                lista.Add(contato2);
                lista.Add(contato3);
            }
        }

        [HttpGet]
        public IList<Contato> Get()
        {   
            return lista;
        }

        [HttpPost]
        public string Post(Contato contato)
        {
            lista.Add(contato);
            return "Contato adicionado com sucesso";
        }
    }
}
