<#assign crafterSiteName = siteContext.siteName!"">

<#assign staticAssetsPath = siteContext.staticAssetsPath!"">

<#assign userJSON = "null"/>
<#if profile?? && profile.email??>
  <#assign userJSON = applicationContext.customerService.getCurrent()/>
</#if>

<#assign personaAge = "null"/>
<#if profile?? && profile.attributes?? && profile.attributes.age??>
  <#assign personaAge = "\"${profile.attributes.age}\"" />
</#if>

<#assign personaGender = "null"/>
<#if profile?? && profile.attributes?? && profile.attributes.gender??>
  <#assign personaGender = "\"${profile.attributes.gender}\"" />
</#if>

<#include "/static-assets/app/index.html" />

