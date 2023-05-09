import { 
	Box, 
	Heading, 
	Link, 
	UnorderedList, 
	ListItem, 
	Stack, 
	StackDivider, 
	Text,
} from "@chakra-ui/react"; 
import Layout from "@/components/Layout";

const Datenschutz = () => {
	const title = "Voice | Datenschutz";
	return (
		<Layout title={title}>
			<Stack 
				as={Box}
				textAlign={'center'}
				spacing={{ base: 8, md: 14 }}
				py={{ base: 20, md: 6 }}>
				<StackDivider />
				<Heading>Datenschutzerklarung & Impressum</Heading>
				<Stack
					as={Box}
					textAlign={'center'}>
					<Link href="#datenschutz-auf-einen-blick">Datenschutz auf einen Blick</Link>
				<Link href="#allgemeine-hinweise-und-pflichtinformationen">Allgemeine Hinweise und Pflichtinformation</Link>
				<Link href="#datenerfassung-aud-unserer-website">Datenerfassung auf unserer Website</Link>
			</Stack>
			<StackDivider />
			{/* Section 1 */}
			<Stack textAlign={'left'}>
				<Stack spacing={6}>
					<Stack divider={<StackDivider />}id="datenschutz-auf-einen-blick">
						<Text as={'b'} fontSize={'3xl'}>1. Datenschutz auf einen Blick</Text>
						<Text as={'b'} fontSize={'2xl'}>1.1 Allgemeine Hinweise</Text>
					</Stack>
					<Text fontSize={'xl'}>
						Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. 
						Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. 
						Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
					</Text>

							<Text as={'b'} fontSize={'2xl'}>1.2 Datenerfassung auf unserer Website</Text>
							<Text as={'b'} fontSize={'xl'}>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</Text>
							<Text fontSize={'xl'}>
								Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
								Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen. 
							</Text>
							<Text as={'b'} fontSize={'xl'}>Wie erfassen wir Ihre Daten?</Text>
							<Text fontSize={'xl'}>
								Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
								Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. 
								Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. 
								Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). 
								Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.
							</Text>
							<Text as={'b'} fontSize={'xl'}>Welche Rechte haben Sie bezüglich Ihrer Daten?</Text>
							<Text fontSize={'xl'}>
								Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. 
								Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. 
								Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. 
								Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
							</Text>

						<Text as={'b'} fontSize={'2xl'}>1.3 Analyse-Tools und Tools von Drittanbietern</Text>
						<Text fontSize={'xl'}>
							Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. 
							Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. 
							Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen zurückverfolgt werden. 
							Sie können dieser Analyse widersprechen oder sie durch die Nichtbenutzung bestimmter Tools verhindern. 
							Detaillierte Informationen dazu finden Sie in der folgenden Datenschutzerklärung. 
							Sie können dieser Analyse widersprechen. 
							Über die Widerspruchsmöglichkeiten werden wir Sie in dieser Datenschutzerklärung informieren.
						</Text>
					</Stack>
					{/* End Section 1 */}
					<StackDivider />
					{/* Section 2 */}
					<Stack spacing={6}>
						<Stack divider={<StackDivider />} id="allgemeine-hinweise-und-pflichtinformationen">
							<Text as={'b'} fontSize={'3xl'}>2. Allgemeine Hinweise und Pflichtinformation</Text>
							<Text as={'b'} fontSize={'2xl'}>2.1 Datenschutz</Text>
						</Stack>
						<Text fontSize={'xl'}>
							Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
							Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. 
							Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. 
							Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. 
							Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. 
							Sie erläutert auch, wie und zu welchem Zweck das geschieht. Wir weisen darauf hin, 
							dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. 
							Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
						</Text>

							<Text as={'b'} fontSize={'2xl'}>2.2 Hinweise zur veranrwortlichen Stelle</Text>
							<Text as={'b'} fontSize={'xl'}>Die veranrwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</Text>
							<Stack divider={<StackDivider />}>
								<Text fontSize={'xl'}>Carolin Paul</Text>
								<Text fontSize={'xl'}>Beusselstraße 32</Text>
								<Text fontSize={'xl'}>10553 Berlin</Text>
								<Text fontSize={'xl'}>Telefon: +49 160 96443032</Text>
								<Text fontSize={'xl'}>Email: <Link href="mailto:carolin@voicepsychology.de">carolin@voicepsychology.de</Link>
								</Text>
							</Stack>
							<Text fontSize={'xl'}>
								Verantwortliche Stelle ist die natürliche oder juristische Person, 
								die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
							</Text>

							<Text as={'b'} fontSize={'2xl'}>2.3 Wilderruf Iher Einwilligung zur Datenverarbeitung</Text>
							<Text fontSize={'xl'}>
								Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. 
								Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. 
								Dazu reicht eine formlose Mitteilung per E-Mail an uns. 
								Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
							</Text>
								
							<Text as={'b'} fontSize={'2xl'}>2.4 Beschwerderecht bei der zuständigen Aufsichtsbehörde</Text>
							<Text fontSize={'xl'}>
								Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. 
								Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem unser Unternehmen seinen Sitz hat. 
								Eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten finden Sie 
								<Link color="orange.200"href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" target="_blank" rel="noopener noreferer"> hier</Link>.
							</Text>

							<Text as={'b'} fontSize={'2xl'}>2.5 Recht auf Datenübertragbarkeit</Text>
							<Text fontSize={'xl'}>
								Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, 
								an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. 
								Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
							</Text>

							<Text as={'b'} fontSize={'2xl'}>SSL - bzw. TLS-Verschulüsselung</Text>
							<Text fontSize={'xl'}>
								Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, 
								die Sie an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschlüsselung. 
								Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von “http://” auf “https://” wechselt und an dem Schloss-Symbol in 
								Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
							</Text>

						<Text as={'b'} fontSize={'2xl'}>2.7 Auskunft, Sperrung, Löschung</Text>
						<Text fontSize={'xl'}>
							Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, 
							deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. 
							ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. 
							Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
						</Text>
					</Stack>
					{/* End Section 2 */}
					<StackDivider />
					{/* Section 3 */}
					<Stack spacing={6}>
						<Stack divider={<StackDivider />} id="datenerfassung-aud-unserer-website">
							<Text as={'b'} fontSize={'3xl'}>3. Datenerfassung auf unserer Website</Text>
							<Text as={'b'} fontSize={'2xl'}>3.1 Cookies</Text>
						</Stack>
						<Text fontSize={'xl'}>
							Die Internetseiten verwenden teilweise so genannte Cookies. 
							Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, 
							effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
						</Text>

							<Text fontSize={'xl'}>
								Die meisten der von uns verwendeten Cookies sind so genannte “Session-Cookies”. 
								Sie werden nach Ende Ihres Besuchs automatisch gelöscht. 
								Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese löschen. 
								Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
							</Text>
							<Text fontSize={'xl'}>
								Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, 
								die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browser aktivieren. 
								Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
							</Text>
							<Text fontSize={'xl'}>
								Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, 
								von Ihnen erwünschter Funktionen (z.B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. 
								Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. 
								Soweit andere Cookies (z.B. 
								Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese in dieser Datenschutzerklärung gesondert behandelt.
							</Text>

							<Text as={'b'} fontSize={'2xl'}>3.2 Server-Log-Dateien</Text>
							<Text fontSize={'xl'}>
								Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
							</Text>
							
							<UnorderedList pl={5}>
								<ListItem>
									<Text fontSize={'xl'}>Browsertyp und Browserversion</Text>
								</ListItem>
								<ListItem>
									<Text fontSize={'xl'}>verwendetes Betriebssystem</Text>
								</ListItem>
								<ListItem>
									<Text fontSize={'xl'}>Referrer URL</Text>
								</ListItem>
								<ListItem>
									<Text fontSize={'xl'}>Hostname des zugreifenden Rechners</Text>
								</ListItem>
								<ListItem>
									<Text fontSize={'xl'}>Uhrzeit der Serveranfrage</Text>
								</ListItem>
								<ListItem>
									<Text fontSize={'xl'}>IP-Adresse</Text>
								</ListItem>
							</UnorderedList>

							<Text fontSize={'xl'}>
								Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
							</Text>
							<Text fontSize={'xl'}>
								Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.
							</Text>

							<Text as={'b'} fontSize={'2xl'}>3.3 Kontaktformular</Text>
							<Text fontSize={'xl'}>
								Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, 
								werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. 
								Diese Daten geben wir nicht ohne Ihre Einwilligung weiter
							</Text>
							<Text fontSize={'xl'}>
								Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf 
								Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. 
								Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
							</Text>
							<Text fontSize={'xl'}>
								Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, 
								bis Sie uns zur Löschung auffordern, 
								Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt 
								(z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). 
								Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
							</Text>

							<Text as={'b'} fontSize={'2xl'}>3.4 Registrierung auf dieser Website (Gästebuch)</Text>
							<Text fontSize={'xl'}>
								Sie können sich auf unserer Website registrieren, um zusätzliche Funktionen auf der Seite zu nutzen. 
								Die dazu eingegebenen Daten verwenden wir nur zum Zwecke der Nutzung des jeweiligen Angebotes oder Dienstes, 
								für den Sie sich registriert haben. Die bei der Registrierung abgefragten Pflichtangaben müssen vollständig angegeben werden. 
								Anderenfalls werden wir die Registrierung ablehnen. 
								Für wichtige Änderungen etwa beim Angebotsumfang oder bei technisch notwendigen Änderungen nutzen wir die bei der Registrierung angegebene E-Mail-Adresse, 
								um Sie auf diesem Wege zu informieren.
							</Text>
							<Text fontSize={'xl'}>
								Die Verarbeitung der bei der Registrierung eingegebenen Daten erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). 
								Sie können eine von Ihnen erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. 
								Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitung bleibt vom Widerruf unberührt. 
								Die bei der Registrierung erfassten Daten werden von uns gespeichert, solange Sie auf unserer Website registriert sind und werden anschließend gelöscht. 
								Gesetzliche Aufbewahrungsfristen bleiben unberührt. 
							</Text>

							<Text as={'b'} fontSize={'2xl'}>3.5 Kommentarfunktion auf dieser Website (Gästebuch)</Text>
							<Text fontSize={'xl'}>
								Für die Kommentarfunktion auf dieser Seite werden neben Ihrem Kommentar auch Angaben zum Zeitpunkt der Erstellung des Kommentars, 
								Ihre E-Mail-Adresse und, wenn Sie nicht anonym posten, der von Ihnen gewählte Nutzername gespeichert.
							</Text>
							<Text as={'b'} fontSize={'xl'}>Speicherung der IP-Adresse</Text>
							<Text fontSize={'xl'}>
								Unsere Kommentarfunktion speichert die IP-Adressen der Nutzer, die Kommentare verfassen. 
								Da wir Kommentare auf unserer Seite nicht vor der Freischaltung prüfen, benötigen wir diese Daten, 
								um im Falle von Rechtsverletzungen wie Beleidigungen oder Propaganda gegen den Verfasser vorgehen zu können.
							</Text>
							<Text as={'b'} fontSize={'xl'}>Speicherdauer der Kommentare</Text>
							<Text fontSize={'xl'}>
								Die Kommentare und die damit verbundenen Daten (z.B. IP-Adresse) werden gespeichert und verbleiben auf unserer Website, 
								bis der kommentierte Inhalt vollständig gelöscht wurde oder die Kommentare aus rechtlichen Gründen gelöscht werden müssen (z.B. beleidigende Kommentare).
							</Text>							
							<Text as={'b'} fontSize={'xl'}>Rechtsgrundlag</Text>
							<Text fontSize={'xl'}>
								Die Speicherung der Kommentare erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). 
								Sie können eine von Ihnen erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. 
								Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
							</Text>
							
							<Text as={'b'} fontSize={'2xl'}>3.6 Verarbeiten von Daten (Kunden- und Vertragsdaten)</Text>
							<Text fontSize={'xl'}>
								Wir erheben, verarbeiten und nutzen personenbezogene Daten nur, soweit sie für die Begründung, 
								inhaltliche Ausgestaltung oder Änderung des Rechtsverhältnisses erforderlich sind (Bestandsdaten). 
								Dies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, 
								der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet. 
								Personenbezogene Daten über die Inanspruchnahme unserer Internetseiten (Nutzungsdaten) erheben, verarbeiten und nutzen wir nur, soweit dies erforderlich ist, 
								um dem Nutzer die Inanspruchnahme des Dienstes zu ermöglichen oder abzurechnen.
							</Text>
							<Text fontSize={'xl'}>
								Die erhobenen Kundendaten werden nach Abschluss des Auftrags oder Beendigung der Geschäftsbeziehung gelöscht. 
								Gesetzliche Aufbewahrungsfristen bleiben unberührt.
							</Text>
							
							<Text as={'b'} fontSize={'2xl'}>3.7 Datenübermittlung bei Vertragsschluss für Online-Shops, Händler und Warenversand</Text>
							<Text fontSize={'xl'}>
								Wir übermitteln personenbezogene Daten an Dritte nur dann, wenn dies im Rahmen der Vertragsabwicklung notwendig ist, 
								etwa an die mit der Lieferung der Ware betrauten Unternehmen oder das mit der Zahlungsabwicklung beauftragte Kreditinstitut. 
								Eine weitergehende Übermittlung der Daten erfolgt nicht bzw. nur dann, wenn Sie der Übermittlung ausdrücklich zugestimmt haben. 
								Eine Weitergabe Ihrer Daten an Dritte ohne ausdrückliche Einwilligung, etwa zu Zwecken der Werbung, erfolgt nicht.
							</Text>
							<Text fontSize={'xl'}>
								Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.
							</Text>

						<Text as={'b'} fontSize={'2xl'}>3.8 Datenübermittlung bei Vertragsschluss für Dienstleistungen und digitale Inhalte</Text>
						<Text fontSize={'xl'}>
							Wir übermitteln personenbezogene Daten an Dritte nur dann, wenn dies im Rahmen der Vertragsabwicklung notwendig ist, 
							etwa an das mit der Zahlungsabwicklung beauftragte Kreditinstitut. 
							Eine weitergehende Übermittlung der Daten erfolgt nicht bzw. nur dann, 
							wenn Sie der Übermittlung ausdrücklich zugestimmt haben. 
							Eine Weitergabe Ihrer Daten an Dritte ohne ausdrückliche Einwilligung, etwa zu Zwecken der Werbung, erfolgt nicht. 
							Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, 
							der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.
						</Text>
					</Stack>
					{/* End Section 3 */}
				</Stack>
			</Stack>
		</Layout>
	)
}

export default Datenschutz;
