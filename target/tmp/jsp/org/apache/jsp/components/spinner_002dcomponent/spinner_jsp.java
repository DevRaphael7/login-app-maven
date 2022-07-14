package org.apache.jsp.components.spinner_002dcomponent;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class spinner_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List<String> _jspx_dependants;

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public java.util.List<String> getDependants() {
    return _jspx_dependants;
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;

    try {
      response.setContentType("text/html;charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;
      _jspx_resourceInjector = (org.glassfish.jsp.api.ResourceInjector) application.getAttribute("com.sun.appserv.jsp.resource.injector");

      out.write("\r\n");
      out.write("\r\n");
      out.write("<html>\r\n");
      out.write("    <head>\r\n");
      out.write("        <script>\r\n");
      out.write("            var NovoComponente = document.registerElement('loading-componente', {\r\n");
      out.write("                prototype: Object.create(HTMLElement.prototype, {\r\n");
      out.write("                    createdCallback: {\r\n");
      out.write("                        value: function(){\r\n");
      out.write("                          var\r\n");
      out.write("                          link     = document.querySelector('link[rel=import]'),\r\n");
      out.write("                          t        = link.import.querySelector('#tpl-loading'),\r\n");
      out.write("                          clone    = document.importNode(t.content, true);\r\n");
      out.write("                          element  = this,\r\n");
      out.write("                          text     = this.getAttribute('text'),\r\n");
      out.write("                          animates = clone.querySelectorAll('.load-anime div');\r\n");
      out.write("                            clone.querySelector('.load-anime').classList.add(\"circle\");\r\n");
      out.write("                          clone.querySelector('.loading-text').innerHTML = text;\r\n");
      out.write("                          element.createShadowRoot().appendChild(clone);\r\n");
      out.write("                        }\r\n");
      out.write("                    }\r\n");
      out.write("                })\r\n");
      out.write("            });\r\n");
      out.write("        </script>\r\n");
      out.write("    </head>\r\n");
      out.write("    <body>\r\n");
      out.write("        <template id=\"tpl-loading\">\r\n");
      out.write("            <style>\r\n");
      out.write("                .loading {\r\n");
      out.write("                    height: auto;\r\n");
      out.write("                    margin: 10px auto;\r\n");
      out.write("                    text-align: center;\r\n");
      out.write("                    width: auto;\r\n");
      out.write("                }\r\n");
      out.write("                .loading p {\r\n");
      out.write("                    font-family: 'Arial';\r\n");
      out.write("                    font-weight: bold;\r\n");
      out.write("                }\r\n");
      out.write("                .load-anime div{\r\n");
      out.write("                  background: #FF5700;\r\n");
      out.write("                  display: inline-block;\r\n");
      out.write("                }\r\n");
      out.write("                .circle{\r\n");
      out.write("                  height: 10px;\r\n");
      out.write("                }\r\n");
      out.write("                .circle div {\r\n");
      out.write("                  border-radius: 100%;\r\n");
      out.write("                  display: inline-block;\r\n");
      out.write("                  height: 10px;\r\n");
      out.write("                  width: 10px;\r\n");
      out.write("                  -webkit-animation: scale 1.2s infinite ease-in-out;\r\n");
      out.write("                  animation: scale 1.2s infinite ease-in-out;\r\n");
      out.write("                }\r\n");
      out.write("                .load-anime .load-anime2 {\r\n");
      out.write("                  -webkit-animation-delay: -1.1s;\r\n");
      out.write("                  animation-delay: -1.1s;\r\n");
      out.write("                }\r\n");
      out.write("                .load-anime .load-anime3 {\r\n");
      out.write("                  -webkit-animation-delay: -1.0s;\r\n");
      out.write("                  animation-delay: -1.0s;\r\n");
      out.write("                }\r\n");
      out.write("                .load-anime .load-anime4 {\r\n");
      out.write("                  -webkit-animation-delay: -0.9s;\r\n");
      out.write("                  animation-delay: -0.9s;\r\n");
      out.write("                }\r\n");
      out.write("                .load-anime .load-anime5 {\r\n");
      out.write("                  -webkit-animation-delay: -0.8s;\r\n");
      out.write("                  animation-delay: -0.8s;\r\n");
      out.write("                }\r\n");
      out.write("                @-webkit-keyframes scale {\r\n");
      out.write("                  0%, 40%, 100% { -webkit-transform: scale(0.4) }\r\n");
      out.write("                  20% { -webkit-transform: scale(1.0) }\r\n");
      out.write("                }\r\n");
      out.write("                @keyframes scale {\r\n");
      out.write("                  0%, 40%, 100% {\r\n");
      out.write("                    transform: scale(0.4);\r\n");
      out.write("                    -webkit-transform: scale(0.4);\r\n");
      out.write("                  }  20% {\r\n");
      out.write("                    transform: scale(1.0);\r\n");
      out.write("                    -webkit-transform: scale(1.0);\r\n");
      out.write("                  }\r\n");
      out.write("                }\r\n");
      out.write("            </style>\r\n");
      out.write("            <div class=\"loading\">\r\n");
      out.write("              <div class=\"load-anime\">\r\n");
      out.write("                <div class=\"load-anime1\"></div>\r\n");
      out.write("                <div class=\"load-anime2\"></div>\r\n");
      out.write("                <div class=\"load-anime3\"></div>\r\n");
      out.write("                <div class=\"load-anime4\"></div>\r\n");
      out.write("                <div class=\"load-anime5\"></div>\r\n");
      out.write("              </div>\r\n");
      out.write("              <p class=\"loading-text\"></p>\r\n");
      out.write("            </div>\r\n");
      out.write("        </template>\r\n");
      out.write("    </body>\r\n");
      out.write("</html>");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          out.clearBuffer();
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
