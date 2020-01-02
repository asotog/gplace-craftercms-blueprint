#import "/templates/system/common/cstudio-support.ftl" as studio />

<#assign siteName = "null"/>
<#if siteContext?? && siteContext.siteName??>
    <#assign siteName = siteContext.siteName />
</#if>

<#include "/static-assets/app/index.html" />