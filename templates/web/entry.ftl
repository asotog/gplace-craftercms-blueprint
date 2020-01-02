<#import "/templates/system/common/cstudio-support.ftl" as studio />

<#assign pageMetadataTitle = model.pageMetadataTitle_s!'' />
<#assign pageMetadataKeywords = model.pageMetadataKeywords_s!'' />
<#assign pageMetadataDescription = model.pageMetadataDescription_s!'' />

<#assign siteName = "null"/>
<#if siteContext?? && siteContext.siteName??>
    <#assign siteName = siteContext.siteName />
</#if>

<#include "/static-assets/app/index.html" />