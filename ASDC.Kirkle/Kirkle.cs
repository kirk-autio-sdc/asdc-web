using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace ASDC.Kirkle;

public static class Kirkle
{
    [FunctionName("MakeGuess")]
    public static async Task<IActionResult> MakeGuess([HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "guess")] HttpRequest request, ILogger log)
    {
        
        
    }
}