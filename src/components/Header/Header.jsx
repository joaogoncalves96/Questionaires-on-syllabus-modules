import styles from "./Header.module.css";

function Header() {
   return (
      <div className={styles.header}>
         <div className={styles.images}>
            {" "}
            <svg height="3.2rem" fill="currentColor" viewBox="0 0 142 27">
               <path d="M87.114 20.36a6.398 6.398 0 01-1.145 3.695c-.713 1.059-1.68 1.86-2.851 2.402a6.447 6.447 0 01-2.546.543 6.387 6.387 0 01-3.691-1.163c-1.07-.723-1.859-1.705-2.368-2.893-.33-.802-.484-1.68-.484-2.584v-.93h3.997l.026.956c0 .465.152.93.432 1.369a3.09 3.09 0 001.095.904c.306.13.637.207.993.207.509 0 .967-.13 1.375-.413.407-.31.712-.672.89-1.111.128-.31.179-.646.179-1.008 0-.388-.077-.75-.23-1.085-.127-.414-.381-.827-.687-1.266a21.29 21.29 0 00-1.145-1.318c-.458-.465-4.659-4.496-4.76-4.599-.332-.336-.739-.568-1.197-.568h-.586a1.522 1.522 0 01-1.298-.698 8.916 8.916 0 01-.79-1.55c-.33-.905-.508-1.783-.508-2.636 0-.671.101-1.343.305-1.963.204-.62.458-1.215.815-1.757.789-1.111 1.756-1.912 2.902-2.377.764-.362 1.604-.543 2.52-.543 1.35 0 2.597.388 3.691 1.137 1.044.723 1.833 1.705 2.368 2.894.204.516.356 1.085.433 1.653 0 .052.025.233.025.285.077.852.102 1.912.102 1.912h-4.048s0-.62-.076-1.525c-.026-.413-.178-.8-.407-1.188a2.781 2.781 0 00-1.12-.905 2.393 2.393 0 00-.968-.18c-.484 0-.942.154-1.375.464a2.371 2.371 0 00-.89 1.111 2.59 2.59 0 00.026 2.067c.126.414.38.827.712 1.292.28.388 1.654 1.809 1.985 2.093.28.258.662.414 1.07.414h1.018c.636-.026 1.12.206 1.782.93.407.439 2.036 2.196 2.342 2.532 1.247 1.42 1.502 2.144 1.655 2.661.33.956.432 1.912.432 2.739zM109.822 11.498h.051c.535 0 .942.516.84 1.059l-2.8 14.21h-6.568l-1.146-7.673-1.145 7.673H92.51l-.05-.232-2.42-13.952a1.293 1.293 0 00-1.272-1.085c-.61 0-1.145-.465-1.273-1.086L85.791.258h3.996l1.859 10.18a1.27 1.27 0 001.273 1.06h.025c.611 0 1.146.439 1.273 1.059l1.706 9.25 1.476-9.224a.921.921 0 00-.916-1.085c-.56 0-.993-.517-.917-1.086l.891-5.606h3.284l.917 5.89c.076.44.458.776.916.776h.586c.458 0 .84.336.916.775l1.502 9.534 2.011-9.25a.86.86 0 00-.84-1.06.86.86 0 01-.84-1.059L107.098.258h3.87l-2.011 10.18c-.077.543.331 1.06.865 1.06zM125.3 12.583a1.292 1.292 0 00-1.273-1.085c-.611 0-1.145-.465-1.273-1.086-.967-5.348-1.807-10.154-1.807-10.154h-6.975l-1.884 10.18c-.102.569.331 1.085.865 1.085.56 0 .993.517.866 1.086l-2.622 14.184h4.073l1.4-7.854h5.652l1.4 7.88h4.124c.051-.052-1.757-9.74-2.546-14.236zm-7.841 2.248l.382-2.248a.917.917 0 00-.891-1.085.917.917 0 01-.891-1.086l1.069-6.356h.56l1.095 6.356c.102.62.636 1.086 1.247 1.086.611 0 1.146.465 1.248 1.085l.382 2.248h-4.201zM141.313 11.24c-.586-.182-.688-.647-.408-1.112.357-.594.23-1.085.23-1.473 0-1.11-.23-2.196-.637-3.28a8.595 8.595 0 00-3.004-3.721A8.377 8.377 0 00132.81.258h-5.855v10.154c0 .595.484 1.086 1.069 1.086.586 0 1.069.49 1.069 1.085v14.159h3.946v-9.638h1.909c1.171 0 2.266-.232 3.233-.697 1.502-.62 2.648-1.602 3.463-3.075.229-.388.331-.672.331-1.111.025-.258-.153-.827-.662-.982zm-6.339 1.834h-1.909v-.465c0-.595-.484-1.086-1.07-1.086-.585 0-1.069-.49-1.069-1.085V4.263h1.909c.586 0 1.146.13 1.706.362.815.362 1.451.878 1.909 1.602.51.75.739 1.576.739 2.454.025 1.318-.331 1.525-.382 1.964-.051.465.153.594.534.982.23.232.204.646-.101.904-.739.569-1.401.543-2.266.543zM17.693.517v25.966H13.44V12.35l-3.233 6.434H7.433L4.251 12.35v14.133H0V.517h3.131l5.703 11.29L14.485.518h3.208zM25.457.517h-3.92v25.966h3.92V.517zM65.374 5.038c-.636-1.317-1.63-2.403-3.004-3.281A9.055 9.055 0 0057.737.49h-6.925v25.966h6.925c.153 0 .814-.026.89-.051.103 0 .383-.052.434-.052.101 0 .203-.026.305-.052.153-.026.662-.155.79-.18.025 0 .28-.078.407-.13.127-.051.254-.077.381-.155.204-.077.662-.258.688-.284.127-.052.433-.207.458-.233.127-.077.662-.387.79-.49.127-.078.228-.181.356-.259.025 0 .28-.258.407-.362.127-.103.229-.206.33-.335.154-.155.28-.285.408-.465.102-.104.178-.207.255-.336.916-1.24 1.4-2.662 1.4-4.186V7.957c0-1.007-.23-1.989-.662-2.919zm-3.386 13.927c0 .465-.102.93-.33 1.369-.28.62-.739 1.137-1.375 1.524a4.398 4.398 0 01-2.19.569h-3.207V4.47h3.207c.433 0 .84.051 1.248.206.076.026.152.052.254.078a3.37 3.37 0 011.68 1.24c.128.155.204.31.306.491l.076.155.077.155a.37.37 0 01.05.155c.026.052.051.104.051.181a.236.236 0 01.026.13c.05.232.076.464.076.671v11.033h.051zM46.968.517v25.966h-3.92L33.247 9.69v16.794h-3.92V.517h3.207l.713 1.214 9.801 16.794V.517h3.92z"></path>
            </svg>
            <img
               src="https://cdn-icons.flaticon.com/png/512/3463/premium/3463741.png?token=exp=1653129107~hmac=63e803d7545ebafcdfd12734381ef9a6"
               alt=""
            />
         </div>
      </div>
   );
}

export default Header;
