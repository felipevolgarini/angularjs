using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api
{
    public class Contato
    {
        public string nome { get; set; }
        public string telefone { get; set; }
        public DateTime data { get; set; }
        public Operadora operadora { get; set; }
    }
}
