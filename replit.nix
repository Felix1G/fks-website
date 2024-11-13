{ pkgs }: {
	deps = [
   pkgs.openssh
   pkgs.q
		pkgs.nodejs
        pkgs.nodePackages.typescript-language-server
        pkgs.yarn
	];
}