package org.apache.jsp.pages.loginPage;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class login_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List<String> _jspx_dependants;

  static {
    _jspx_dependants = new java.util.ArrayList<String>(1);
    _jspx_dependants.add("/pages/loginPage/../../components/spinner-component/spinner.jsp");
  }

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
      out.write("<!DOCTYPE html>\r\n");
      out.write("<html lang=\"en\">\r\n");
      out.write("<head>\r\n");
      out.write("    <meta charset=\"UTF-8\">\r\n");
      out.write("    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n");
      out.write("    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n");
      out.write("    <link rel=\"stylesheet\" href=\"styles/style-login.css\">\r\n");
      out.write("    <title>Document</title>\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("    <section class=\"flex-center full-h\">\r\n");
      out.write("        <div class=\"card-login bg shadow size padd-10p relative\" card-login>\r\n");
      out.write("            <h2>Login</h2>\r\n");
      out.write("            <form class=\"form\" formLogin>\r\n");
      out.write("                <div class=\"fields-form fields-form-txt mag-top-10p\">\r\n");
      out.write("                    <label>Nome: </label>\r\n");
      out.write("                    <input \r\n");
      out.write("                        type=\"text\" \r\n");
      out.write("                        class=\"padd-5p\" \r\n");
      out.write("                        placeholder=\"Seu nome\" \r\n");
      out.write("                        usuario>\r\n");
      out.write("                </div>\r\n");
      out.write("                <div class=\"fields-form fields-form-txt mag-top-10p\">\r\n");
      out.write("                    <label>Senha: </label>\r\n");
      out.write("                    <input \r\n");
      out.write("                        type=\"text\" \r\n");
      out.write("                        class=\"padd-5p\" \r\n");
      out.write("                        placeholder=\"Sua senha\" \r\n");
      out.write("                        senha\r\n");
      out.write("                    >\r\n");
      out.write("                </div>\r\n");
      out.write("                <div class=\"mag-top-10p flex-center\">\r\n");
      out.write("                    <button type=\"submit\" class=\"btn-primary bg cl padd-5p full-w\" id=\"btn-login\">\r\n");
      out.write("                        Login\r\n");
      out.write("                    </button>\r\n");
      out.write("                </div>\r\n");
      out.write("            </form>\r\n");
      out.write("            <p errorMessage class=\"mag-top-10p error-message\"></p>\r\n");
      out.write("            <p sucessMessage class=\"mag-top-10p success-message\"></p>\r\n");
      out.write("            <span class=\"full-h flex-end\"></span>\r\n");
      out.write("            <button class=\"absolute end padd-5p btn-primary bg cl\" btn-goToCadastrar>\r\n");
      out.write("                Cadastrar\r\n");
      out.write("            </button>\r\n");
      out.write("        </div>\r\n");
      out.write("\r\n");
      out.write("        <div class=\"card-login bg shadow size padd-10p relative hide\" card-register>\r\n");
      out.write("            <h2>Cadastrar</h2>\r\n");
      out.write("            <form class=\"form\" formRegister>\r\n");
      out.write("                <div class=\"fields-form fields-form-txt mag-top-10p\">\r\n");
      out.write("                    <label>Nome: </label>\r\n");
      out.write("                    <input \r\n");
      out.write("                        type=\"text\" \r\n");
      out.write("                        class=\"padd-5p\" \r\n");
      out.write("                        placeholder=\"Seu nome\" \r\n");
      out.write("                        required\r\n");
      out.write("                        usuarioCadastro>\r\n");
      out.write("                </div>\r\n");
      out.write("                <div class=\"fields-form fields-form-txt mag-top-10p\">\r\n");
      out.write("                    <label>E-mail: </label>\r\n");
      out.write("                    <input \r\n");
      out.write("                        type=\"email\" \r\n");
      out.write("                        class=\"padd-5p\" \r\n");
      out.write("                        placeholder=\"Seu email\" \r\n");
      out.write("                        emailCadastro\r\n");
      out.write("                    >\r\n");
      out.write("                </div>\r\n");
      out.write("                <div class=\"fields-form fields-form-txt mag-top-10p\">\r\n");
      out.write("                    <label>Senha: </label>\r\n");
      out.write("                    <input \r\n");
      out.write("                        type=\"text\" \r\n");
      out.write("                        class=\"padd-5p\" \r\n");
      out.write("                        placeholder=\"Sua senha\" \r\n");
      out.write("                        required\r\n");
      out.write("                        senhaCadastro\r\n");
      out.write("                    >\r\n");
      out.write("                </div>\r\n");
      out.write("                <div class=\"fields-form fields-form-txt mag-top-10p\">\r\n");
      out.write("                    <label>Idade: </label>\r\n");
      out.write("                    <input \r\n");
      out.write("                        type=\"text\" \r\n");
      out.write("                        class=\"padd-5p\" \r\n");
      out.write("                        placeholder=\"Sua idade\" \r\n");
      out.write("                        required\r\n");
      out.write("                        idadeCadastro\r\n");
      out.write("                    >\r\n");
      out.write("                </div>\r\n");
      out.write("                <div class=\"mag-top-10p flex-center\">\r\n");
      out.write("                    <button type=\"submit\" class=\"btn-primary bg cl padd-5p full-w\" id=\"btn-cadastro\">\r\n");
      out.write("                        Cadastrar\r\n");
      out.write("                    </button>\r\n");
      out.write("                </div>\r\n");
      out.write("            </form>\r\n");
      out.write("            <p errorMessageRegister class=\"mag-top-10p error-message\"></p>\r\n");
      out.write("            <p sucessMessageRegister class=\"mag-top-10p success-message\"></p>\r\n");
      out.write("            <span class=\"full-h flex-end\"></span>\r\n");
      out.write("            <button class=\"absolute end padd-5p btn-primary bg cl\">\r\n");
      out.write("                Login\r\n");
      out.write("            </button>\r\n");
      out.write("        </div>\r\n");
      out.write("\r\n");
      out.write("        <div class=\"hide\" loading> \r\n");
      out.write("            ");
      out.write("\r\n");
      out.write("\r\n");
      out.write("<!DOCTYPE html>\r\n");
      out.write("<html lang=\"en\">\r\n");
      out.write("<head>\r\n");
      out.write("    <meta charset=\"UTF-8\">\r\n");
      out.write("    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n");
      out.write("    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n");
      out.write("    <link rel=\"stylesheet\" href=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.evaluateExpression("${pageContext.request.contextPath}", java.lang.String.class, (PageContext)_jspx_page_context, null));
      out.write("/components/spinner-component/style.css\">\r\n");
      out.write("    <title>Document</title>\r\n");
      out.write("</head>\r\n");
      out.write("<body>  \r\n");
      out.write("    <svg class=\"spinner\" width=\"65px\" height=\"65px\" viewBox=\"0 0 66 66\" xmlns=\"http://www.w3.org/2000/svg\">\r\n");
      out.write("        <circle class=\"path\" fill=\"none\" stroke-width=\"6\" stroke-linecap=\"round\" cx=\"33\" cy=\"33\" r=\"30\"></circle>\r\n");
      out.write("    </svg>\r\n");
      out.write("</body>\r\n");
      out.write("</html>");
      out.write("\r\n");
      out.write("        </div>\r\n");
      out.write("    </section>\r\n");
      out.write("    <script type=\"module\" src=\"./scripts/login-page.script.js\"></script>\r\n");
      out.write("</body>\r\n");
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
