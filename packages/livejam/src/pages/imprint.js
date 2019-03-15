import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Layout from "../components/layout";

const Imprint = ({ classes }) => (
  <Layout>
    <Grid container justify="center" alignItems="center">
      <Grid item xs={9} className={classes.text}>
        <Typography variant="h2">Impressum</Typography>
        <Typography variant="h4">Angaben gemäß § 5 TMG</Typography>
        <Typography paragraph>
          Korfmann Consulting UG (haftungsbeschränkt)
          <br />
          Schlankreye 4 <br />
          20144 Hamburg
        </Typography>
        <Typography paragraph>
          Handelsregister: HRB 143357
          <br /> Registergericht: Hamburg
        </Typography>
        <Typography paragraph>Vertreten durch: Sebastian Korfmann</Typography>
        <Typography variant="h4">Kontakt</Typography>
        <Typography paragraph>
          Telefon: +49-40-28468924
          <br /> E-Mail: sebastian@korfmann.net
        </Typography>
        <Typography variant="h4">Umsatzsteuer-ID</Typography>
        <Typography paragraph>
          Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
          DE308701953
        </Typography>
        <Typography variant="h4">
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
        </Typography>
        <Typography paragraph>
          Sebastian Korfmann <br />
          Schlankreye 4<br /> 20144 Hamburg
          <br />
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </Typography>
        <Typography variant="h4">Haftung für Inhalte</Typography>
        <Typography paragraph>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </Typography>
        <Typography paragraph>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
        </Typography>
        <Typography variant="h4">Haftung für Links</Typography>
        <Typography paragraph>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </Typography>
        <Typography paragraph>
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
          ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </Typography>
        <Typography variant="h4">Urheberrecht</Typography>
        <Typography paragraph>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </Typography>
        <Typography paragraph>
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </Typography>
      </Grid>
    </Grid>
  </Layout>
);

const styles = theme => ({
  text: {
    "& h4": {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    "& p": {
      marginBottom: theme.spacing(2)
    }
  }
});

export default withStyles(styles)(Imprint);
