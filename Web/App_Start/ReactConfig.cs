using JavaScriptEngineSwitcher.Core;
using JavaScriptEngineSwitcher.V8;
using React;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(wprawka.ReactConfig), "Configure")]

namespace wprawka
{
    public static class ReactConfig
    {
        public static void Configure()
        {
            JsEngineSwitcher.Current.DefaultEngineName = V8JsEngine.EngineName;
            JsEngineSwitcher.Current.EngineFactories.AddV8();

            ReactSiteConfiguration.Configuration
                .SetLoadReact(false)
                .SetLoadBabel(false)
                .AddScriptWithoutTransform("~/Static/indexReports.js");
        }
    }
}